import React from 'react'
import Link from 'next/link'

export default function Qualifications() {
  const certs = [
    { file: '/Front-End_Web_Development_E-Certificate.pdf', title: 'Front-End Web Development E-Certificate' },
    { file: '/Web_Design_for_Beginners_E-Certificate.pdf', title: 'Web Design for Beginners E-Certificate' },
    { file: '/Python_for_Beginners_E-Certificate.pdf', title: 'Python for Beginners E-Certificate' },
    { file: '/200-RED.pdf', title: 'Web development Certificate' },
  ]

  return (
    <div className="min-h-screen relative bg-white bg-cover bg-center bg-no-repeat px-6 py-12">
      <h1 className="text-6xl font-sans font-light p-8 mb-4">Qualifications</h1>

      <p className="p-4 font-mono max-w-3xl">
        Below are a few certificates and documents showcasing coursework and achievements. Click any item to open the PDF in a new tab.
      </p>

      <div className="max-w-3xl p-4 grid gap-4">
        {certs.map((c) => (
          <Link
            key={c.file}
            href={c.file}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg p-4 shadow-sm text-slate-800 transition-colors"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-sm text-slate-500 mt-1">Opens in a new tab · PDF</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
