import React from 'react'
import Link from 'next/link'

export default function Project() {

    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'A personal portfolio showcasing my work and skills.',
            tech: 'Next.js, React, Tailwind CSS',
            label: null,
            link : '/'
        },
        {
            id: 2,
            title: 'DOALM7 Idea Platform',
            description: "Designing a structured web platform where authenticated users can submit ,review, and refine ideas under defined ethical and governance constraints.",
            tech: 'Node.js, Express, MongoDB',
            label: null,
            link : null
        }, 
        {
            id: 3,
            title: 'Is It Christmas?',
            description: 'A playful web app that tells you whether it is Christmas based on the current date.',
            tech: 'JavaScript, Vercel',
            label: 'Demo',
            link : 'https://isitchristmas-eight.vercel.app/'
        },
    ]
  return (
    <div className="min-h-screen relative bg-white bg-cover bg-center bg-no-repeat px-6 py-12">
          <h1 className="text-6xl font-sans text-black font-light p-8 mb-4">Projects</h1>
    
          <p className="p-4 font-mono max-w-3xl text-black">
            Below are a few projects
          </p>

          <div className="max-w-3xl p-4 flex flex-wrap justify-center items-center gap-2">
  {projects.map((item) => {
    const Card = (
      <div className="bg-white border border-gray-200 rounded-xl p-6 w-full sm:w-64 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
          {item.title}
          <span className="ml-1">{item.label}</span>
        </h3>
        <p className="text-sm text-gray-600 text-center">
          {item.description}
        </p>
        <p className="text-sm text-gray-600 text-center">
          {item.tech}
        </p>
      </div>
    );

    if (!item.link) {
      return <div key={item.id}>{Card}</div>;
    }

    if (String(item.link).startsWith("http")) {
      return (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {Card}
        </a>
      );
    }

    return (
      <Link key={item.id} href={item.link} className="block">
        {Card}
      </Link>
    );
  })}
</div>


    </div>
  )
}