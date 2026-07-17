import React from 'react'

export default function Txt({ id, title, category, description }) {
  return (
    <div className='flex flex-col gap-2 p-4'>
      <span className='text-xs uppercase tracking-wide text-blue-600 font-medium'>
        {category}
      </span>
      <h3 className='text-lg font-semibold text-gray-800 leading-snug'>
        {title}
      </h3>
      <p className='text-sm text-gray-500 line-clamp-3'>
        {description}
      </p>
    </div>
  )
}