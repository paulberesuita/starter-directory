import { supabase, Template, TemplateInsert, TemplateUpdate } from './supabase'

// Fetch all templates
export async function getAllTemplates(): Promise<Template[]> {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching templates:', error)
    return []
  }

  return data || []
}

// Fetch templates by category
export async function getTemplatesByCategory(category: string): Promise<Template[]> {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching templates by category:', error)
    return []
  }

  return data || []
}

// Fetch single template by slug/id
export async function getTemplateBySlug(slug: string): Promise<Template | null> {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('id', slug)
    .single()

  if (error) {
    console.error('Error fetching template by slug:', error)
    return null
  }

  return data
}

// Search templates
export async function searchTemplates(query: string): Promise<Template[]> {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .or(`name.ilike.%${query}%,description.ilike.%${query}%,tags.cs.{${query}}`)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error searching templates:', error)
    return []
  }

  return data || []
}

// Get related templates (same category, excluding current template)
export async function getRelatedTemplates(templateId: string, limit: number = 3): Promise<Template[]> {
  // First get the current template to know its category
  const currentTemplate = await getTemplateBySlug(templateId)
  if (!currentTemplate) return []

  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('category', currentTemplate.category)
    .neq('id', templateId)
    .limit(limit)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching related templates:', error)
    return []
  }

  return data || []
}

// Get unique categories
export async function getCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from('templates')
    .select('category')

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  // Extract unique categories
  const categories = [...new Set(data?.map(item => item.category) || [])]
  return categories
}

// Admin functions for managing templates
export async function createTemplate(template: TemplateInsert): Promise<Template | null> {
  const { data, error } = await supabase
    .from('templates')
    .insert([{
      ...template,
      last_updated: template.last_updated || new Date().toISOString(),
    }])
    .select()
    .single()

  if (error) {
    console.error('Error creating template:', error)
    throw new Error(`Failed to create template: ${error.message || JSON.stringify(error)}`)
  }

  return data
}

export async function updateTemplate(id: string, updates: TemplateUpdate): Promise<Template | null> {
  const { data, error } = await supabase
    .from('templates')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating template:', error)
    return null
  }

  return data
}

export async function deleteTemplate(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('templates')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting template:', error)
    return false
  }

  return true
} 