import { createTemplate } from './supabase-data'
import { templates } from './templates-data'

// Function to migrate existing template data to Supabase
export async function migrateTemplatesToSupabase() {
  console.log('Starting migration of templates to Supabase...')
  
  try {
    for (const template of templates) {
      console.log(`  template: ${template.name}`)
      
      // Convert the existing template format to match Supabase schema
      const supabaseTemplate = {
        id: template.slug, // Use slug as ID since it's more unique than number
        name: template.name,
        description: template.description,
        full_description: template.fullDescription,
        category: template.category,
        tags: template.tags,
        price: parseFloat(template.price.replace('$', '')), // Convert "$89" to 89
        demo_url: template.demoUrl, // Keep as undefined if not present
        purchase_url: undefined, // This field doesn't exist in original data
        last_updated: template.lastUpdated,
        features: template.features,
        gallery: template.gallery,
      }
      
      console.log(`   Converting data for ${template.name}:`, {
        originalPrice: template.price,
        convertedPrice: supabaseTemplate.price,
        demoUrl: supabaseTemplate.demo_url
      })
      
      try {
        const result = await createTemplate(supabaseTemplate)
        console.log(`✅ Successfully migrated: ${template.name}`)
      } catch (templateError) {
        console.log(`❌ Failed to migrate: ${template.name}`)
        console.error(`   Error: ${templateError instanceof Error ? templateError.message : JSON.stringify(templateError)}`)
      }
    }
    
    console.log('✅ Migration completed!')
  } catch (error) {
    console.error('❌ Migration failed:', error)
  }
}

// Auto-run migration in development mode if URL parameter is present
if (typeof window !== 'undefined' && window.location.search.includes('migrate=true')) {
  migrateTemplatesToSupabase()
} 