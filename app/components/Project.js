"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function Project() {
    const projects = [
        {
            id: 1,
            title: 'Portfolio website',
            description: 'Built a personal portfolio using Next.js to present projects, learning progress , and long-term goals. Focused on clean structure, performance and accessibility.',
            tech: 'Next.js, React, Tailwind CSS',
            label: null,
            link : '/'
        },
        {
            id: 2,
            title: 'DOALM7 Insight Platform (In progress)',
            description: 'Designing a structured web platform where authenticated users can submit ,review, and refine ideas under defined ethical and governance constraints.',
            tech: 'Next.js (Planned: Authentication (Redux), Database (Firebase, MongoDB))',
            label: null,
            link : null
        }, 
        {
            id: 3,
            title: 'Is it Christmas ?',
            description: 'A small experimental web app that cecks the current date and displays a dynamic response. Built as a logic and deployment exercise.',
            tech: 'Express.js, Node.js, EJS, JavaScript, Vercel',
            label: 'experimental',
            link : 'https://isitchristmas-eight.vercel.app/'
        },
    ]
  return (
    <div className="min-h-screen relative bg-white bg-cover bg-center bg-no-repeat px-6 py-12">
          <h1 className="text-6xl font-sans text-black font-light p-8 mb-4">Projects</h1>
    
          <p className="p-4 font-mono max-w-3xl text-black">
            Below are a few projects. 
          </p>

          <div className="max-w-3xl p-4 flex flex-wrap justify-center items-center gap-2">
            {projects.map(item => {
        const CardContent = (
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
        )

        const DraggableCard = (
          <motion.div
            drag
            dragElastic={0.2}
            whileHover={{ scale: 1.05 }}
            whileDrag={{ scale: 1.1 }}
            className="cursor-grab active:cursor-grabbing"
          >
            {CardContent}
          </motion.div>
        )

        if (!item.link) {
          return <div key={item.id}>{DraggableCard}</div>
        }

        return String(item.link).startsWith('http') ? (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DraggableCard}
          </a>
        ) : (
          <Link key={item.id} href={item.link}>
            {DraggableCard}
          </Link>
        )
      })}
          </div>
    </div>
  )
}