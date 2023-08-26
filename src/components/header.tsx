"use client";
import React from 'react';


import { useScrollPosition } from '@/hooks/useScrollPosition';


const Header = () => {
  const scrollPosition = useScrollPosition();
  return (<>
    <header className={`sticky top-0 z-50 transition-shadow ${scrollPosition > 0
        ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
        : "shadow-none"}`}
    >
      < div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            width={0}
            height={0}
            sizes="100vw"
            className="hidden h-8 w-auto lg:block rounded-lg"
            src="https://avatars.githubusercontent.com/u/745163?s=200&v=4" alt='' />
          <span className="ml-3 text-xl">AI Companion</span>
        </a>
     
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  text-base justify-center  ">
        <button><a className="mr-5 hover:text-gray-900 hover:bg-gray-200 rounded ">Get the App</a></button>
        <button><a className="mr-5 hover:text-gray-900 hover:bg-gray-200 rounded">Blog</a></button>
        <button><a className="mr-5 hover:text-gray-900, hover:bg-gray-200 rounded">Help</a></button>
        
      

      </nav>
  </div>
  </header></>
  )
}

export default Header


