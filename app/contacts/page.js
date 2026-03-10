import React from 'react'
import Link from 'next/link'

export default function ContactPage() {

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-black to-black opacity-90" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-2xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-slate-400 mb-4 font-semibold">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Let's Connect!
          </h1>
          <p className="text-xl text-slate-300 max-w-lg mx-auto">
            Feel free to reach out for collaborations, or just to say hi!
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl mb-8">
          <div className="mb-8">
            <h2 className="text-sm uppercase tracking-[0.15em] text-slate-400 font-semibold mb-4">Email</h2>
            <Link 
              href="mailto:okitha.dev@gmail.com"
              className="text-2xl md:text-3xl font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300 break-all"
            >
              okitha.al@gmail.com
            </Link>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <h2 className="text-sm uppercase tracking-[0.15em] text-slate-400 font-semibold mb-6">Connect with me</h2>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-600 transition-all duration-300 hover:border-blue-500"
                aria-label="GitHub"
              >
                GitHub
              </Link>
              <Link 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-600 transition-all duration-300 hover:border-blue-500"
                aria-label="LinkedIn"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="text-center">
          <Link 
            href="/"
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
