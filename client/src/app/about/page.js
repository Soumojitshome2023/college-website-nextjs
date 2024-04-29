"use client"
import AboutCard from '@/components/Home/About/AboutCard'
import React from 'react'

// ==================== About Page ====================
export default function Page() {

  // ==================== Return ====================
  return (
    <div className="relative isolate px-2 min-h-screen">

      <div className="mx-auto max-w-2xl py-2 pt-16 sm:pt-10 lg:py-24">

        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <AboutCard />
    </div>
  )
}

// ============================================================================