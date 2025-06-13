'use client'

import { useState, useEffect } from 'react'
import { getAllTemplates, updateTemplate } from '@/lib/supabase-data'
import { getGalleryImageUrl } from '@/lib/supabase'
import { Template } from '@/lib/supabase'

export default function UpdateImagesPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'updating' | 'success' | 'error'>('idle')
  const [logs, setLogs] = useState<string[]>([])
  const [templates, setTemplates] = useState<Template[]>([])

  // Your 4 Supabase Storage images
  const newImages = [
    getGalleryImageUrl('pic1.png'),
    getGalleryImageUrl('pic2.png'),
    getGalleryImageUrl('pic3.png'),
    getGalleryImageUrl('pic4.png')
  ]

  // Fetch all templates on component mount
  useEffect(() => {
    async function fetchTemplates() {
      setStatus('loading')
      try {
        const data = await getAllTemplates()
        setTemplates(data)
        setLogs([`Found ${data.length} templates in database`])
        data.forEach(template => {
          setLogs(prev => [...prev, `  • ${template.id} (${template.name})`])
        })
        setStatus('idle')
      } catch (error) {
        setLogs(['Error fetching templates:', String(error)])
        setStatus('error')
      }
    }
    
    fetchTemplates()
  }, [])

  const handleUpdate = async () => {
    setStatus('updating')
    setLogs(['Starting dynamic image URL updates...'])

    const addLog = (message: string) => {
      setLogs(prev => [...prev, message])
    }

    try {
      for (let i = 0; i < templates.length; i++) {
        const template = templates[i]
        addLog(`Updating template: ${template.id} (${template.name})`)
        
        // Assign images cyclically - each template gets 2 images
        const imageIndex1 = i % newImages.length
        const imageIndex2 = (i + 1) % newImages.length
        const galleryImages = [newImages[imageIndex1], newImages[imageIndex2]]
        
        try {
          const result = await updateTemplate(template.id, {
            gallery: galleryImages
          })
          
          if (result) {
            addLog(`✅ Successfully updated: ${template.id}`)
            addLog(`   New gallery: [${imageIndex1 + 1}, ${imageIndex2 + 1}] -> ${galleryImages.join(', ')}`)
          } else {
            addLog(`❌ Failed to update: ${template.id} (no result returned)`)
          }
        } catch (error) {
          addLog(`❌ Error updating ${template.id}: ${error}`)
        }
      }
      
      setStatus('success')
      addLog('✅ All template images updated!')
    } catch (error) {
      setStatus('error')
      addLog(`❌ Update failed: ${error}`)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow p-8">
            <p>Loading templates from database...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Update All Template Images Dynamically
          </h1>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              This will update ALL {templates.length} templates in your database with your Supabase Storage images.
              Each template will get 2 images assigned cyclically.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-blue-900 mb-2">Templates found in database ({templates.length}):</h3>
              <div className="text-sm text-blue-800 space-y-1 max-h-32 overflow-y-auto">
                {templates.map((template) => (
                  <div key={template.id}>• {template.id} ({template.name})</div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-green-900 mb-2">Supabase Storage images to be used:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['pic1.png', 'pic2.png', 'pic3.png', 'pic4.png'].map((img, index) => (
                  <div key={img} className="text-center">
                    <img 
                      src={getGalleryImageUrl(img)} 
                      alt={img}
                      className="w-full h-20 object-cover rounded mb-2"
                    />
                    <p className="text-xs text-green-800">#{index + 1} {img}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleUpdate}
            disabled={status === 'updating' || templates.length === 0}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
              status === 'updating'
                ? 'bg-gray-400 cursor-not-allowed'
                : status === 'success'
                ? 'bg-green-500 hover:bg-green-600'
                : status === 'error'
                ? 'bg-red-500 hover:bg-red-600'
                : templates.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {status === 'updating' && 'Updating Images...'}
            {status === 'success' && 'Images Updated ✅'}
            {status === 'error' && 'Update Failed ❌'}
            {status === 'idle' && templates.length === 0 && 'No Templates Found'}
            {status === 'idle' && templates.length > 0 && `Update All ${templates.length} Templates`}
          </button>

          {logs.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Update Logs</h2>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-96 overflow-y-auto">
                {logs.map((log, index) => (
                  <div key={index} className="mb-1">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}

          {status === 'success' && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">
                🎉 All template images updated successfully! You can now go back to your{' '}
                <a href="/" className="underline font-semibold">
                  home page
                </a>{' '}
                to see your templates with the new Supabase Storage images. Or check the{' '}
                <a href="/debug-templates" className="underline font-semibold">
                  debug page
                </a>{' '}
                to verify all the updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 