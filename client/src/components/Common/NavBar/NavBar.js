"use client"
// ======================== Imports ========================
import 'flowbite';
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Link from "next/link";
import AnimatedElement from '../Animation/AnimatedElement';
import HamburgerIcon from './HamburgerIcon';

export default function Navbar() {
  const [NavOpen, setNavOpen] = useState(false)

  
  return (
    <>
      <div className='sticky bg-white bg-opacity-40 top-0 z-50 backdrop-blur-2xl transform transition-all duration-1000 ease-in-out'>
        <nav className="bg-transparent">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">

            {/* college name and logo  */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/collegelogo.png" className="h-6 md:h-8 lg:h-10" alt="AOT Logo" />
              <AnimatedElement className="font-bold  font-serif text-xs sm:text-lg text-blue-900 ">
                ACADEMY OF TECHNOLOGY
                <div className="text-[8px] sm:text-xs text-right ">
                  ....translate your vision into reality
                </div>
              </AnimatedElement>
            </Link>

            {/* search bar  */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-md rounded-2xl bg-[#C1CFFF] opacity-50 outline-none border-none text-black" placeholder="Search..." />
            </div>

            {/* Hamburger */}
            {/* <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 " aria-expanded="false"
              onClick={() => { setNavOpen(prev => !prev) }}>

              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button> */}
            <button className='md:hidden' onClick={() => { setNavOpen(prev => !prev) }} >
              <HamburgerIcon NavOpen={NavOpen} />
            </button>
          </div>
        </nav>

        <nav className="bg-transparent flex justify-evenly items-center">
          <div className={`items-center justify-center ${NavOpen ? 'h-96 p-2' : 'h-0'} transition-transition-height duration-500 ease-in-out overflow-hidden md:overflow-visible md:h-full md:p-2 w-full md:flex bg-blue-950 md:order-1`} >

            {/* Mobile Search */}
            <div className="relative mt-3 md:hidden border-2 border-gray-300 rounded-lg">
              <div className="absolute pl-2 inset-y-0 start-0 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" className="text-white block w-full p-2 ps-10 text-md rounded-xl border-none bg-transparent" placeholder="Search..." />
            </div>

            {/* Nav Links */}
            <AnimatedElement>
              <ul className="flex  flex-col p-2 md:p-0 font-medium md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                <NavLinks />
              </ul>
            </AnimatedElement>

          </div>
        </nav>
      </div>

      <div className='scroll-watcher'></div>

    </>
  )
}