import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import ChitChat from '../src/components/ChitChat'
import UserCard from '../src/components/UserCard'

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
        <UserCard
          name='Mark Antony'
          position='Product Engineer'
          action='Message'
          alt='Mark Antony'
          image='https://tailwindcss.com/img/erin-lindford.jpg'
          onClick={onClick}
        />
        <div className='h-2' />
        <div className='mx-auto flex max-w-sm items-center'>
          <button onClick={onWelcome} className='btn-primary'>
            Welcome
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
