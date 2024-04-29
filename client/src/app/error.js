"use client"
import React from 'react';

export default function NotFound() {

  return (
    <>
      < main className="grid min-h-screen place-items-center bg-transparent px-6 py-12 md:py-12 lg:px-8" >
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600 dark:text-indigo-300">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 md:text-5xl">Something went wrong! :(</h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
        </div>
      </main>
    </>
  )
}
