"use client"
// ======================== Imports ========================
import 'flowbite';
import React, { useState } from 'react'

export default function AccordionCard({ title, description }) {
    const [Open, setOpen] = useState(false);

    return (
        <div className='container mx-auto my-2'>
            <div className="text-blue-600 dark:text-white">
                <h2 >
                    <button className="text-left bg-gray-300 flex items-center justify-between w-full p-5  text-black font-bold md:rounded-t-xl hover:bg-gray-400 "
                        onClick={() => setOpen(prev => !prev)}>
                        <span>{title}</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div className={!Open && 'hidden'} >
                    <div className="p-5 border border-b-0 border-gray-200 ">
                        <p className="mb-2 text-gray-700 font-medium"> {description} </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
