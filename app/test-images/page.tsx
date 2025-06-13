'use client'

import { getGalleryImageUrl } from '@/lib/supabase'
import { useState } from 'react'

export default function TestImagesPage() {
  const imageNames = ['pic1.png', 'pic2.png', 'pic3.png', 'pic4.png']
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({})

  const handleImageLoad = (imageName: string) => {
    setLoadedImages(prev => ({ ...prev, [imageName]: true }))
  }

  const handleImageError = (imageName: string) => {
    setErrorImages(prev => ({ ...prev, [imageName]: true }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Supabase Storage Images Test
          </h1>
          
          <p className="text-gray-600 mb-8">
            Testing the images you uploaded to your Supabase Storage gallery bucket.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {imageNames.map((imageName) => {
              const imageUrl = getGalleryImageUrl(imageName)
              return (
                <div key={imageName} className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    {errorImages[imageName] ? (
                      <div className="text-red-500 text-center p-4">
                        <p className="font-semibold">Failed to load</p>
                        <p className="text-sm">{imageName}</p>
                      </div>
                    ) : (
                      <img
                        src={imageUrl}
                        alt={imageName}
                        className="w-full h-full object-cover"
                        onLoad={() => handleImageLoad(imageName)}
                        onError={() => handleImageError(imageName)}
                      />
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{imageName}</h3>
                    <p className="text-xs text-gray-500 break-all mb-2">{imageUrl}</p>
                    
                    <div className="flex items-center gap-2">
                      {loadedImages[imageName] && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          ✅ Loaded
                        </span>
                      )}
                      {errorImages[imageName] && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                          ❌ Error
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="font-semibold text-blue-900 mb-2">Next Steps</h2>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• If images load successfully, they're now integrated into your templates</li>
              <li>• Go to your <a href="/" className="underline font-semibold">home page</a> to see templates with new images</li>
              <li>• Click on individual templates to see the gallery functionality</li>
              <li>• If images don't load, check your Supabase Storage bucket permissions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 