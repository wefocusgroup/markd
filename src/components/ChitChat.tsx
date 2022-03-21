import Image from 'next/image'
import React from 'react'

type ChitChatProps = {
  image?: string
  title: string
  description: string
  alt: string
}

export default function ChitChat({
  image = '/logo.png',
  title,
  description,
  alt,
}: ChitChatProps) {
  return (
    <div className='mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg'>
      <div className='shrink-0'>
        <Image width={50} height={50} src={image} alt={alt} />
      </div>
      <div>
        <div className='text-xl font-medium text-black'>{title}</div>
        <p className='text-slate-500'>{description}</p>
      </div>
    </div>
  )
}
