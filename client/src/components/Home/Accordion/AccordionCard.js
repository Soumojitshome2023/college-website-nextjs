"use client"
// ======================== Imports ========================
import 'flowbite';
import React, { useState } from 'react'

export default function AccordionCard({ title, description }) {
    const [Open, setOpen] = useState(false);

    return (
        <div className='container mx-auto my-2'>
            <div data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                <h2 >
                    <button type="button" className="text-left flex items-center justify-between w-full p-5 font-medium  text-gray-500 border border-b-0 border-gray-200 rounded-t-xl  dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                        onClick={() => setOpen(prev => !prev)}>
                        <span>{title}</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={!Open && 'hidden'} >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400"> {description} </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
