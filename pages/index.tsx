import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header'

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex h-screen w-full flex-col overflow-hidden'>
        <Header />
        <main className='flex-1 overflow-y-scroll bg-white pt-2 text-center'>
          <div className='mb-2 min-h-screen bg-gray-200'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quos dignissimos doloremque enim necessitatibus accusamus dolorum
              aperiam, at tempora vel?
            </p>
          </div>
          <div className='mb-2 min-h-screen bg-gray-200'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quos dignissimos doloremque enim necessitatibus accusamus dolorum
              aperiam, at tempora vel?
            </p>
          </div>
          <div className='mb-2 min-h-screen bg-gray-200'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quos dignissimos doloremque enim necessitatibus accusamus dolorum
              aperiam, at tempora vel?
            </p>
          </div>
          <div className='mb-2 min-h-screen bg-gray-200'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quos dignissimos doloremque enim necessitatibus accusamus dolorum
              aperiam, at tempora vel?
            </p>
          </div>
          <div className='mb-2 min-h-screen bg-gray-200'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quos dignissimos doloremque enim necessitatibus accusamus dolorum
              aperiam, at tempora vel?
            </p>
          </div>
        </main>
        <footer className='border-grey w-full border pt-2 pb-2 text-center'>
          <span className='text-sm text-gray-500'>
            &copy; {new Date().getFullYear()}
          </span>{' '}
          Powered by <span className='text-blue-500'>D Shop</span>
        </footer>
      </div>
    </div>
  )
}

export default Home
