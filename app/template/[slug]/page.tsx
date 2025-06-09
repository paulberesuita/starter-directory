import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react'
import { getTemplateBySlug, getRelatedTemplates } from '@/lib/templates-data'
import { TemplateCard } from '@/components/template-card'
import { Button } from '@/components/ui/button'
import { Gallery } from '@/components/ui/gallery'
import { siteConfig } from '@/lib/site-config'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function TemplatePage({ params }: PageProps) {
  const { slug } = await params
  const template = getTemplateBySlug(slug)

  if (!template) {
    notFound()
  }

  const relatedTemplates = siteConfig.detailPage.enableRelatedTemplates 
    ? getRelatedTemplates(template.id, siteConfig.detailPage.relatedTemplatesCount)
    : []

  return (
    <div className="min-h-screen bg-white">
      {/* Page transition wrapper */}
      <div 
        className="animate-in fade-in duration-500"
        style={{
          animationDuration: `${siteConfig.detailPage.transition.duration}ms`,
          animationTimingFunction: siteConfig.detailPage.transition.ease,
        }}
      >
        {/* Header with back button */}
        <div className="border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">
                {siteConfig.detailPage.buttonText.backToTemplates}
              </span>
            </Link>
          </div>
        </div>

        {/* Main content - Single column layout */}
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          {/* Template header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <span className="text-gray-500 text-sm">
                Updated {new Date(template.lastUpdated).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {template.name}
            </h1>

            {/* Short description below header */}
            <p className="text-lg text-gray-500 font-normal mb-6 max-w-xl mx-auto">
              {template.description}
            </p>

            {/* Tags right below description */}
            {template.tags.length > 0 && (
              <p className="text-sm font-semibold text-black mb-6">
                {template.tags.join(' · ')}
              </p>
            )}

            {/* Price and demo button */}
            <div className="flex flex-wrap items-center justify-center gap-4">              
              {siteConfig.detailPage.enableDemo && template.demoUrl && (
                <a 
                  href={template.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    {siteConfig.detailPage.buttonText.viewDemo}
                  </Button>
                </a>
              )}
              
              <Button size="lg" className="px-8">
                {siteConfig.detailPage.buttonText.purchase}
              </Button>
            </div>
          </div>

          {/* Gallery */}
          {siteConfig.detailPage.enableGallery && template.gallery.length > 0 && (
            <div className="mb-16">
              <Gallery images={template.gallery} templateName={template.name} />
            </div>
          )}

          {/* Content sections - Left aligned */}
          <div className="text-left space-y-8 max-w-2xl mx-auto">
            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {template.fullDescription}
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  This template showcases modern design principles and user-centric interfaces. 
                  Each screen has been carefully crafted to provide an intuitive user experience 
                  while maintaining professional aesthetics. The template includes all necessary 
                  components and layouts to build a complete, production-ready application.
                </p>
              </div>
            </div>

            {/* Features */}
            {siteConfig.detailPage.enableFeatures && template.features.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold  text-gray-900 mb-4">Features</h2>
                <ul className="space-y-3">
                  {template.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Use Cases */}
            <div>
              <h2 className="text-xl font-semibold  text-gray-900 mb-4">Use Cases</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Perfect for businesses and developers looking to build professional {template.category.toLowerCase()} applications. 
                  This template is ideal for startups, agencies, and enterprises who need a robust foundation for their digital products.
                </p>
                <ul className="text-gray-600 space-y-2 mt-4">
                  <li>• Rapid prototyping and MVP development</li>
                  <li>• Client projects and custom applications</li>
                  <li>• Learning and educational purposes</li>
                  <li>• Commercial products and SaaS platforms</li>
                </ul>
              </div>
            </div>

            {/* Technical Details */}
            <div>
              <h2 className="text-xl font-semibold  text-gray-900 mb-4">Technical Details</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Built with modern web technologies and best practices. The template follows responsive design principles 
                  and includes comprehensive documentation for easy customization and deployment.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• React & Next.js</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Modern UI Components</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Includes</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Source code</li>
                      <li>• Documentation</li>
                      <li>• Design files</li>
                      <li>• Free updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Related templates */}
          {relatedTemplates.length > 0 && (
            <div className="pt-16 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                More {template.category} Templates
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedTemplates.map((relatedTemplate) => (
                  <TemplateCard 
                    key={relatedTemplate.id} 
                    template={relatedTemplate} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  // This would typically come from your data source
  // For now, we'll return a few common slugs to pre-generate
  return [
    { slug: 'saas-dashboard-pro' },
    { slug: 'ecommerce-marketplace' },
    { slug: 'task-management-system' },
  ]
} 