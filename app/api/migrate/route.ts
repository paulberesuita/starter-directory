import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { templates } from '@/lib/templates-data'

// Use service role key for server-side operations (bypasses RLS)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // This bypasses RLS
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

export async function POST() {
  try {
    console.log('Starting server-side migration...')
    const results = []

    for (const template of templates) {
      console.log(`Migrating: ${template.name}`)
      
      // Convert the existing template format to match Supabase schema
      const supabaseTemplate = {
        id: template.slug,
        name: template.name,
        description: template.description,
        full_description: template.fullDescription,
        category: template.category,
        tags: template.tags,
        price: parseFloat(template.price.replace('$', '')),
        demo_url: template.demoUrl,
        purchase_url: undefined,
        last_updated: template.lastUpdated,
        features: template.features,
        gallery: template.gallery,
      }

      try {
        const { data, error } = await supabaseAdmin
          .from('templates')
          .insert([{
            ...supabaseTemplate,
            last_updated: supabaseTemplate.last_updated || new Date().toISOString(),
          }])
          .select()
          .single()

        if (error) {
          console.error(`Error migrating ${template.name}:`, error)
          results.push({ 
            template: template.name, 
            status: 'error', 
            error: error.message 
          })
        } else {
          console.log(`✅ Successfully migrated: ${template.name}`)
          results.push({ 
            template: template.name, 
            status: 'success', 
            data: data 
          })
        }
      } catch (templateError) {
        console.error(`Exception migrating ${template.name}:`, templateError)
        results.push({ 
          template: template.name, 
          status: 'error', 
          error: templateError instanceof Error ? templateError.message : 'Unknown error'
        })
      }
    }

    const successCount = results.filter(r => r.status === 'success').length
    const errorCount = results.filter(r => r.status === 'error').length

    return NextResponse.json({
      success: errorCount === 0,
      message: `Migration completed: ${successCount} success, ${errorCount} errors`,
      results,
      summary: { total: templates.length, success: successCount, errors: errorCount }
    })

  } catch (error) {
    console.error('Migration failed:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Migration failed', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
} 