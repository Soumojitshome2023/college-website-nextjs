
import React from 'react'
import NavLinks from './NavLinks'

export default function Navbar() {

  return (
    <div>
      <div className="h-20  flex justify-ceenter flex-row items-center w-full">
        <div className="w-full h-full  flex justify-center items-center">
          <img src="/collegelogo.png" className="w-auto h-10 mr-2" />
          <div className="font-bold  font-serif text-lg text-blue-900 ">
            ACADEMY OF TECHNOLOGY
            <div className="text-xs text-right ">
              ....translate your vision into reality
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 w-full  flex justify-center items-center mb-4">
        <NavLinks />
      </div>
    </div>
  )
}