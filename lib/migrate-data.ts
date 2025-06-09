import { createTemplate } from './supabase-data'
import { templatesData } from './templates-data'

// Function to migrate existing template data to Supabase
export async function migrateTemplatesToSupabase() {
  console.log('Starting migration of templates to Supabase...')
  
  try {
    for (const template of templatesData) {
      console.log(`Migrating template: ${template.name}`)
      
      // Convert the existing template format to match Supabase schema
      const supabaseTemplate = {
        id: template.id,
        name: template.name,
        description: template.description,
        full_description: template.fullDescription,
        category: template.category,
        tags: template.tags,
        price: template.price,
        demo_url: template.demoUrl,
        purchase_url: template.purchaseUrl,
        last_updated: template.lastUpdated,
        features: template.features,
        gallery: template.gallery,
      }
      
      const result = await createTemplate(supabaseTemplate)
      
      if (result) {
        console.log(`✅ Successfully migrated: ${template.name}`)
      } else {
        console.log(`❌ Failed to migrate: ${template.name}`)
      }
    }
    
    console.log('✅ Migration completed!')
  } catch (error) {
    console.error('❌ Migration failed:', error)
  }
}

// You can run this function once to migrate your data
// migrateTemplatesToSupabase() 