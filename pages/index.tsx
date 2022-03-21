import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import ChitChat from '../src/components/ChitChat'
import StateFull from '../src/components/StateFull'

const Home: NextPage = () => {
  const onClick = () => {
    console.log('Clicked')
  }

  const onWelcome = () => {
    console.log('onWelcome')
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <ChitChat
          title='This is a title'
          description='This is a description'
          image='/logo.svg'
          alt='Logo'
        />
        <div className='h-2' />
        <div className='mx-auto flex max-w-sm items-center'>
          <button onClick={onWelcome} className='btn-primary'>
            Welcome
          </button>
        </div>
        <div className='h-2' />
        <StateFull type='One' />
        <div className='h-2' />
        <StateFull />
      </div>
    </div>
  )
}

export default Home
