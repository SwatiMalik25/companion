import React from 'react'
import Image from 'next/image';
//import * as React from 'react'
import Head from 'next/head';


const Header = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image
                width={0}
                height={0}
                sizes="100vw"
                className="hidden h-8 w-auto lg:block rounded-lg"
                src="https://avatars.githubusercontent.com/u/745163?s=200&v=4"alt=''/>
      <span className="ml-3 text-xl">AI Companion</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Get the App</a>
      <a className="mr-5 hover:text-gray-900">Blog</a>
      <a className="mr-5 hover:text-gray-900">Help</a>
      <a className="mr-5 hover:text-gray-900">Login</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default Header