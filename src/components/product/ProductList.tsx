import Image from 'next/image'
import React from 'react'
import img from '../../../public/vercel.png'

export default function ProductList() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
          Customers also purchased
        </h2>

        <div className='grid grid-rows-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          <a href='#' className='group'>
            <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
              <Image alt='Vercel logo' src={img} width={1000} height={1000} />
            </div>
            <h3 className='mt-4 text-sm text-gray-700'>Earthen Bottle</h3>
            <p className='mt-1 text-lg font-medium text-gray-900'>$48</p>
          </a>

          <a href='#' className='group'>
            <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
              <Image alt='Vercel logo' src={img} width={1000} height={1000} />
            </div>
            <h3 className='mt-4 text-sm text-gray-700'>Nomad Tumbler</h3>
            <p className='mt-1 text-lg font-medium text-gray-900'>$35</p>
          </a>

          <a href='#' className='group'>
            <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
              <Image alt='Vercel logo' src={img} width={1000} height={1000} />
            </div>
            <h3 className='mt-4 text-sm text-gray-700'>Focus Paper Refill</h3>
            <p className='mt-1 text-lg font-medium text-gray-900'>$89</p>
          </a>

          <a href='#' className='group'>
            <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
              <Image alt='Vercel logo' src={img} width={1000} height={1000} />
            </div>
            <h3 className='mt-4 text-sm text-gray-700'>
              Machined Mechanical Pencil
            </h3>
            <p className='mt-1 text-lg font-medium text-gray-900'>$35</p>
          </a>
        </div>
      </div>
    </div>
  )
}
