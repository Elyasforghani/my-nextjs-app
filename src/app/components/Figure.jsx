import Image from 'next/image'
import React from 'react'

export default function Figure({ src, price }) {
  return (
    <figure className='relative w-full h-[220px] bg-gray-100'>
      <Image
        src={src}
        alt='product image'
        fill
        className='object-cover'
      />
      <span className='absolute bottom-2 right-2 bg-black/80 text-white text-sm font-semibold px-2 py-1 rounded-md'>
        ${price}
      </span>
    </figure>
  )
}