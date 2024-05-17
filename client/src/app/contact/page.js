import HTMLRender from '@/Helper/HTMLRender'
import React from 'react'

export default function page() {
  return (

    <div className='p-2 pb-20 bg-white'>
      <h1 className="m-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| CONTACT</span> :</h1>

      <div className='m-2 w-full'>
        <HTMLRender FilePath={"/RichText/ContactPage.html"} />
      </div>
    </div>
  )
}
