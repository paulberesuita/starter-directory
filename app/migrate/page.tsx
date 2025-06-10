'use client'

import { useState } from 'react'
import { migrateTemplatesToSupabase } from '@/lib/migrate-data'

export default function MigratePage() {
  const [status, setStatus] = useState<'idle' | 'migrating' | 'success' | 'error'>('idle')
  const [logs, setLogs] = useState<string[]>([])

  const handleMigration = async () => {
    setStatus('migrating')
    setLogs(['Starting migration...'])

    // Override console.log to capture migration logs
    const originalLog = console.log
    const originalError = console.error
    
    console.log = (...args) => {
      setLogs(prev => [...prev, args.join(' ')])
      originalLog(...args)
    }
    
    console.error = (...args) => {
      setLogs(prev => [...prev, `ERROR: ${args.join(' ')}`])
      originalError(...args)
    }

    try {
      await migrateTemplatesToSupabase()
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setLogs(prev => [...prev, `Migration failed: ${error}`])
    } finally {
      // Restore original console methods
      console.log = originalLog
      console.error = originalError
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Data Migration Tool
          </h1>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              This tool will migrate your existing template data from the static files to your Supabase database.
              Run this once after setting up Supabase.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 text-sm">
                <strong>Warning:</strong> Only run this migration once. It will attempt to create new records in your database.
              </p>
            </div>
          </div>

          <button
            onClick={handleMigration}
            disabled={status === 'migrating'}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
              status === 'migrating'
                ? 'bg-gray-400 cursor-not-allowed'
                : status === 'success'
                ? 'bg-green-500 hover:bg-green-600'
                : status === 'error'
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {status === 'migrating' && 'Migrating...'}
            {status === 'success' && 'Migration Complete ✅'}
            {status === 'error' && 'Migration Failed ❌'}
            {status === 'idle' && 'Start Migration'}
          </button>

          {logs.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Migration Logs</h2>
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
                🎉 Migration completed successfully! You can now go back to your{' '}
                <a href="/" className="underline font-semibold">
                  home page
                </a>{' '}
                to see your templates.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 