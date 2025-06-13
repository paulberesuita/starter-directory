import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to get Supabase Storage public URL
export function getStorageUrl(bucket: string, path: string): string {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

// Helper function to get gallery image URLs
export function getGalleryImageUrl(imageName: string): string {
  return getStorageUrl('gallery', imageName)
}

// Types for our database
export interface Template {
  id: string
  name: string
  description: string
  full_description: string
  category: string
  tags: string[]
  price: number
  demo_url?: string
  purchase_url?: string
  last_updated: string
  features: string[]
  gallery: string[]
  created_at: string
  updated_at: string
}

export interface TemplateInsert {
  id?: string
  name: string
  description: string
  full_description: string
  category: string
  tags: string[]
  price: number
  demo_url?: string
  purchase_url?: string
  last_updated?: string
  features: string[]
  gallery: string[]
}

export interface TemplateUpdate {
  id?: string
  name?: string
  description?: string
  full_description?: string
  category?: string
  tags?: string[]
  price?: number
  demo_url?: string
  purchase_url?: string
  last_updated?: string
  features?: string[]
  gallery?: string[]
} 