import React from 'react'
import AnimatedElement from '../Animation/AnimatedElement'
import Link from "next/link";

export default function Footer() {

  return (
    <div className="relative bottom-0 bg-[#272626]">
      <footer className="text-white body-font">
        <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          {/* G Map  */}
          <AnimatedElement className=' rounded-lg '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9295269261065!2d88.37397647408291!3d22.95282237922273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8930eeb863655%3A0xb3a6adf26d41d0b5!2sAcademy%20of%20Technology!5e0!3m2!1sen!2sin!4v1713956112554!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </AnimatedElement>


          {/* Footer Links  */}
          {/* Departments */}
          <AnimatedElement className=" flex-grow flex flex-wrap mb-10 text-left order-first">
            <div className="lg:w-2/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Departments</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/academics/departments/ece" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Electronics & Communication</Link>
                </li>
                <li>
                  <Link href="/academics/departments/cse" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Computer Science</Link>
                </li>
                <li>
                  <Link href="/academics/departments/csbs" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Computer Science & Business Systems</Link>
                </li>
                <li>
                  <Link href="/academics/departments/ee" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Electrical Engineering</Link>
                </li>
                <li>
                  <Link href="/academics/departments/eee" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Electrical & Electronics</Link>
                </li>
                <li>
                  <Link href="/academics/departments/me" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Mechanical Engineering</Link>
                </li>
              </nav>
            </div>

            {/* Downloads */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">B. Tech Syllabus</h2>
              <nav className="list-none mb-10">
                <li>
                  <a target='_blank' href='https://makautexam.net/aicte_details/CourseStructure/CSBS20.pdf' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; CSBS</a>
                </li>
                <li>
                  <a target='_blank' href='https://makautexam.net/aicte_details/CourseStructure/CSE.pdf' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; CSE</a>
                </li>
                <li>
                  <a target='_blank' href='https://makautexam.net/aicte_details/CourseStructure/ECE.pdf' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; ECE</a>
                </li>
                <li>
                  <a target='_blank' href='https://makautexam.net/aicte_details/CourseStructure/EE.pdf' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; EE</a>
                </li>
                <li>
                  <a target='_blank' href='https://makautexam.net/aicte_details/CourseStructure/EEE.pdf' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; EEE</a>
                </li>
                <li>
                  <a target='_blank' href='https://makautexam.net/aicte_details/CourseStructure/ME.pdf' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; ME</a>
                </li>
              </nav>
            </div>
            {/* Admission Enquiry */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Admission Enquiry</h2>
              <nav className="list-none mb-10">
                <li>
                  <a target='_blank' href='/DocFiles/Documents for Admission AOT.pdf' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Documents for Admission</a>
                </li>
                <li>
                  <Link href='/contact' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Contact Us</Link>
                </li>

              </nav>
            </div>

            {/* AOT Online */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">AOT Online</h2>
              <nav className="list-none mb-10">
                <li>
                  <a target='_blank' href='https://www.linkedin.com/school/academy-of-technology/' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; LinkedIn</a>
                </li>
                <li>
                  <a target='_blank' href='https://www.instagram.com/aotconnect/' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Instagram</a>
                </li>
                <li>
                  <a target='_blank' href='https://www.youtube.com/channel/UC1lroAhlIz6Reni_I2dpaHA' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; YouTube</a>
                </li>
                <li>
                  <a target='_blank' href='http://182.74.215.198/moodle/' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Moodle Portal Login</a>
                </li>
                <li>
                  <a target='_blank' href='https://gic.aot.edu.in/index.html' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Google Innovation Centre</a>
                </li>

              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Address</h2>

              <p className="text-white hover:text-gray-300 cursor-pointer">Grand Tank Road,</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Adisaptagram,</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Adecconagar , Bandel</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Hoogly , 721212</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">academy.of.technology@aot.edu.in</p>
              <h4 className="text-white hover:text-gray-300 cursor-pointer">+91 9883464589</h4>
            </div>

          </AnimatedElement>
        </div>

        <div>
          <div>
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-300 text-sm text-center sm:text-left">© 2024 AOT —
                <a rel="noopener noreferrer" className="text-gray-300 ml-1" target="_blank">@aot</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-300" href='https://m.facebook.com/profile.php?id=100067475193505&name=xhp_nt_' target='_blank'>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300" href='https://www.instagram.com/aotconnect/' target='_blank'>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300" href='https://www.linkedin.com/school/academy-of-technology/' target='_blank'>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" ></path>
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