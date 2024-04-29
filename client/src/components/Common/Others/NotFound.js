"use client"
// ======================== Imports ========================
import Link from 'next/link';
import React from 'react';

export default function NotFound() {

    const ButtonClass = "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";


    // ======================== Return ========================

    return (
        <>
            < main className="grid min-h-screen place-items-center bg-transparent px-6 py-12 sm:py-12 lg:px-8" >
                <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600 dark:text-indigo-300">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl">Page not found :(</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/" className={ButtonClass} >
                            Go back home
                        </Link>

                    </div>
                </div>
            </main>
        </>
    )
}

// ===================================================================
