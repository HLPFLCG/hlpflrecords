import React from 'react'

export default function MinimalPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="/blacklogonobackgroudn.svg" 
            alt="HLPFL" 
            className="w-20 h-auto mx-auto"
          />
        </div>
        <div className="text-gray-800 font-light text-lg tracking-wider">
          CHAOS → CLARITY
        </div>
        <div className="text-gray-600 text-sm mt-2 italic">
          pronounced "helpful"
        </div>
        <div className="text-gray-700 text-sm mt-6 space-y-1">
          <div>an artist forward record label</div>
          <div>est 2019.</div>
        </div>
        <div className="text-gray-700 text-sm mt-4">
          Grand Rapids, MI
        </div>
      </div>
    </div>
  )
}