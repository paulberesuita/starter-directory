"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import Fuse from "fuse.js"
import { Header } from "@/components/header"
import { TemplateCard } from "@/components/template-card"
import { getAllTemplates } from "@/lib/supabase-data"
import { Template } from "@/lib/supabase"
import { siteConfig } from "@/lib/site-config"

export default function Home() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  // Fetch templates from Supabase
  useEffect(() => {
    async function fetchTemplates() {
      try {
        const data = await getAllTemplates()
        setTemplates(data)
      } catch (error) {
        console.error('Failed to fetch templates:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchTemplates()
  }, [])

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(templates, {
      keys: siteConfig.search.searchableFields,
      threshold: siteConfig.search.fuzzyThreshold,
      includeScore: true,
    })
  }, [templates])

  // Filter templates based on search query
  const filteredTemplates = useMemo(() => {
    if (!searchQuery.trim() || !siteConfig.features.search) {
      return templates
    }
    
    const results = fuse.search(searchQuery)
    return results.map(result => result.item)
  }, [searchQuery, fuse])

  // Memoize the search handler to prevent unnecessary re-renders
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  // Generate grid classes based on config
  const gridClasses = `grid grid-cols-${siteConfig.templates.gridColumns.mobile} md:grid-cols-${siteConfig.templates.gridColumns.tablet} lg:grid-cols-${siteConfig.templates.gridColumns.desktop} xl:grid-cols-${siteConfig.templates.gridColumns.wide} gap-6`

  return (
    <>
      <Header onSearch={siteConfig.features.search ? handleSearch : undefined} />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{siteConfig.content.hero.title}</h2>
          <p className="text-muted-foreground">
            {siteConfig.content.hero.subtitle}
            {searchQuery && siteConfig.search.showResultCount && (
              <span className="ml-2">
                • {filteredTemplates.length} result{filteredTemplates.length !== 1 ? 's' : ''} for "{searchQuery}"
              </span>
            )}
          </p>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Loading templates...</p>
          </div>
        ) : filteredTemplates.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              {searchQuery ? `${siteConfig.content.noResults.title} "${searchQuery}"` : 'No templates found'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm text-primary hover:underline"
              >
                {siteConfig.content.noResults.clearButton}
              </button>
            )}
          </div>
        ) : (
          <div className={gridClasses}>
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        )}
      </main>
    </>
  )
}
