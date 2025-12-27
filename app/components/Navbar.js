import React from 'react'
import Image from 'next/image'
import logo from '../../public/LOGO_NEW.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <header className="bg-black">
  <div className="mx-auto flex h-18 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Link className="block text-teal-600" href="/">
      <span className="sr-only">Home</span>
      <Image 
        src={logo}
        alt='Logo'
        className='h-17 w-45'
      />
    </Link>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <div className="flex items-center gap-4">
        <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}
