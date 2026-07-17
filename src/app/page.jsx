'use client'
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
    </main>
  )
}