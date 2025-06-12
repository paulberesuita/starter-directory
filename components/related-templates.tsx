import { Template } from '@/lib/supabase'
import { TemplateCard } from '@/components/template-card'

interface RelatedTemplatesProps {
  templates: Template[]
  category?: string
  title?: string
  className?: string
}

export function RelatedTemplates({ 
  templates, 
  category, 
  title,
  className = "" 
}: RelatedTemplatesProps) {
  if (templates.length === 0) {
    return null
  }

  // Generate title based on category or use provided title
  const displayTitle = title || (category ? `More ${category} Templates` : 'Related Templates')

  return (
    <div className={`pt-16 border-t border-gray-200 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        {displayTitle}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <TemplateCard 
            key={template.id} 
            template={template} 
          />
        ))}
      </div>
    </div>
  )
} 