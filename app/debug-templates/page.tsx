'use client'

import { useState, useEffect } from 'react'
import { getAllTemplates } from '@/lib/supabase-data'
import { Template } from '@/lib/supabase'

export default function DebugTemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const data = await getAllTemplates()
        setTemplates(data)
        console.log('Templates from database:', data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        console.error('Error fetching templates:', err)
      } finally {
        setLoading(false)
      }
    }
    
    fetchTemplates()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow p-8">
            <p>Loading templates...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Debug: Database Templates
          </h1>
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800">Error: {error}</p>
            </div>
          )}

          <div className="mb-6">
            <p className="text-gray-600">
              Found {templates.length} templates in database. Here are their IDs and current gallery URLs:
            </p>
          </div>

          <div className="space-y-6">
            {templates.map((template) => (
              <div key={template.id} className="border rounded-lg p-4">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-500 font-mono">ID: {template.id}</p>
                  <p className="text-sm text-gray-500">Category: {template.category}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Current Gallery URLs:</h4>
                  {template.gallery && template.gallery.length > 0 ? (
                    <div className="space-y-2">
                      {template.gallery.map((url, index) => (
                        <div key={index} className="bg-gray-50 p-2 rounded text-xs font-mono break-all">
                          {index + 1}. {url}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No gallery images</p>
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Current Gallery Preview:</h4>
                  <div className="flex gap-2 flex-wrap">
                    {template.gallery && template.gallery.length > 0 ? (
                      template.gallery.map((url, index) => (
                        <div key={index} className="relative">
                          <img 
                            src={url} 
                            alt={`${template.name} ${index + 1}`}
                            className="w-24 h-16 object-cover rounded border"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.border = '2px solid red'
                              target.alt = 'Failed to load'
                            }}
                          />
                          <span className="absolute top-0 left-0 bg-black text-white text-xs px-1 rounded">
                            {index + 1}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 italic">No images to preview</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {templates.length > 0 && (
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Next Steps:</h3>
              <p className="text-blue-800 text-sm">
                Now that we can see the actual template IDs, we can update the update script to use the correct IDs.
                Go back to the <a href="/update-images" className="underline font-semibold">update images page</a> after I fix the IDs.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 