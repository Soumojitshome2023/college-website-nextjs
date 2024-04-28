"use client"
// ======================== Imports ========================
import 'flowbite';
import React from 'react'

export default function Accordion() {
    return (
        <div className='container mx-auto my-12'>
            <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                <h2 id="accordion-color-heading-1">
                    <button type="button" className="text-left flex items-center justify-between w-full p-5 font-medium  text-gray-500 border border-b-0 border-gray-200 rounded-t-xl  dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a className="text-blue-600 dark:text-blue-500 hover:underline">Lorem Ipsum is simply dummy text of the </a> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-2">
                    <button type="button" className="text-left flex items-center justify-between w-full p-5 font-medium  text-gray-500 border border-b-0 border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                        <span>Lorem Ipsum is simply dummy text of the printing and types</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <p className="text-gray-500 dark:text-gray-400">Lorem IpsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-3">
                    <button type="button" className="text-left flex items-center justify-between w-full p-5 font-medium  text-gray-500 border border-gray-200  dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
                    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry:</p>
                        <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                            <li><a className="text-blue-600 dark:text-blue-500 hover:underline">Lorem Ipsum is simply dummy</a></li>
                            <li><a rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Lorem Ipsum is simply dumm</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
