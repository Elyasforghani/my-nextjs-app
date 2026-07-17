'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import './globals.css'
import Figure from './components/Figure'
import Txt from './components/Txt'

export default function Page() {
  const [myData, setMyData] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setMyData(data.products))
  }, [])

  if (myData == null) {
    return (
      <main className='flex items-center justify-center min-h-screen bg-gray-50'>
        <p className='text-gray-500 text-lg animate-pulse'>Loading products...</p>
      </main>
    )
  }

  return (
    <main className='min-h-screen bg-gray-50 py-12 px-6'>
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-10'>
        Our Products
      </h1>
      <div className='flex flex-wrap justify-center gap-8 max-w-7xl mx-auto'>
        {myData.map((val) => (
          <article
            key={val.id}
            className='flex flex-col w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden'
          >
            <Figure src={val.images[0]} price={val.price} />
            <Txt
              description={val.description}
              title={val.title}
              id={val.id}
              category={val.category}
            />
          </article>
        ))}
      </div>
      <Footer />
    </main>
  )
}

function Footer() {
 
  return (
    <footer className="w-full bg-slate-800 text-slate-300 py-10 mt-20 border-t border-slate-700">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        
        <div className="mb-6 md:mb-0">
          <Image 
              src="/my-photo.jpg" // Path to your file in the public folder
              alt="My Photo"
              width={48}
              height={48}
              className="object-cover rounded-2xl"
            />
          <h2 className="text-xl font-bold text-white">Elyas forghani</h2>
          <p className="text-sm text-slate-400">© 2026 All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          <a href="https://github.com/Elyasforghani" className="hover:text-white transition-colors duration-200">GitHub</a>
          <a href="https://www.linkedin.com/in/alireza-forghani-b4746b263/" className="hover:text-white transition-colors duration-200">LinkedIn</a>
          <a href="mailto:elyasfgidev@gmail.com" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>
        
      </div>
    </footer>
  )
}