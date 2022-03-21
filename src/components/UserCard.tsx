import Image from 'next/image'
import React from 'react'

type UserCardProps = {
  name: string
  image: string
  alt: string
  position: string
  action: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function UserCard({
  name,
  image,
  alt,
  position,
  action,
  onClick,
}: UserCardProps) {
  return (
    <div className='mx-auto max-w-sm space-y-2 rounded-xl bg-white py-8 px-8 shadow-lg sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4'>
      <Image
        className='mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0'
        src={image}
        alt={alt}
        width={100}
        height={100}
      />
      <div className='space-y-2 text-center sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg font-semibold text-black'>{name}</p>
          <p className='font-medium text-slate-500'>{position}</p>
        </div>
        <button
          onClick={onClick}
          className='rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
        >
          {action}
        </button>
      </div>
    </div>
  )
}
