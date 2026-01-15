"use client"

import Image from "next/image"
import React from 'react'
import Link from "next/link";
//import { motion } from 'motion/react'

export default function Header() {
  return (
    <main className="min-h-screen relative bg-black flex items-center justify-center px-6">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-black opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-20">

        {/* Left Content */}
        <div className="text-white px-4 md:px-0">
          <p className="text-sm uppercase tracking-[0.15em] text-slate-400 mb-6 font-semibold">Welcome</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Okitha Hettiarachchi
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-6">Student Developer</p>

          <p className="text-slate-300 max-w-lg leading-relaxed mb-8 text-lg">
            I craft accessible, performant web applications with meticulous attention to design and user experience. Specialized in React, Next.js, and modern JavaScript.
          </p>

          <div className="flex flex-wrap gap-4">
          <Link
            href="/resume.pdf"
            download
            aria-label="Download resume"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg
               transition-transform duration-300 shadow-lg hover:scale-110"
          >
          Download Resume
          </Link>

          <Link
            href="/contacts"
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg
               border border-slate-600 transition-transform duration-300
               hover:scale-110"
          >
          Get In Touch
         </Link>
        </div>
        </div>

        {/* Right - Avatar */}
        <div className="flex justify-center md:justify-end px-4 md:px-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl" />
            <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
              <Image 
                src="/Image.jpeg" 
                alt="Okitha avatar" 
                width={200} 
                height={200} 
                className="rounded-xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}