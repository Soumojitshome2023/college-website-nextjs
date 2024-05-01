import React from 'react'


// ====================== Paragraph / Blog Style Skeleton ======================
export default function ParagraphSkeletonLoader() {

  return (
    <div className="min-h-screen mt-8">

      <div className="w-full mx-auto px-4 py-8">
        <div role="status" className="flex items-center justify-center h-56 w-full bg-gray-400 rounded-lg animate-pulse dark:bg-gray-700">
          <svg className="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <header className="py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse flex items-center space-x-4">
            <div className="h-12 w-12 bg-gray-400 rounded-full"></div>
            <div>
              <div className="h-4 w-20 bg-gray-400 rounded"></div>
              <div className="h-4 w-16 bg-gray-400 rounded mt-2"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-400 rounded w-2/3"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        </div>

        <div className="animate-pulse space-y-4 mt-12">
          <div className="h-4 bg-gray-400 rounded w-2/3"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-400 rounded w-2/3"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        </div>

        <div className="animate-pulse space-y-4 mt-12">
          <div className="h-4 bg-gray-400 rounded w-2/3"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-400 rounded w-2/3"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        </div>

        <div className="animate-pulse space-y-4 mt-12">
          <div className="h-4 bg-gray-400 rounded w-2/3"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
          <div className="h-4 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  )
}

// ==================================================================