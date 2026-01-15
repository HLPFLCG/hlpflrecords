'use client'

import React from 'react'

/**
 * Loading component shown during page transitions
 * Provides visual feedback while content is loading
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-gold/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold animate-spin" />
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  )
}
