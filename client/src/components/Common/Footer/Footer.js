import React from 'react'

export default function Footer() {

  return (
    <div className="relative bottom-0 bg-[#272626]">
      <footer className="text-white body-font">
        <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          {/* G Map  */}
          <div className='soumojitanibox'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9295269261065!2d88.37397647408291!3d22.95282237922273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8930eeb863655%3A0xb3a6adf26d41d0b5!2sAcademy%20of%20Technology!5e0!3m2!1sen!2sin!4v1713956112554!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Footer Links  */}
          <div className="soumojitanibox flex-grow flex flex-wrap mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-300 cursor-pointer">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-300 text-sm text-center sm:text-left">© 2024 AOT —
                <a rel="noopener noreferrer" className="text-gray-300 ml-1" target="_blank">@aot</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-300">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}