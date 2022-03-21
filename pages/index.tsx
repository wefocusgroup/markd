import type { NextPage } from 'next'
import Head from 'next/head'
import ChitChat from '../src/components/ChitChat'
import UserCard from '../src/components/UserCard'

const Home: NextPage = () => {
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
        />
      </div>
    </div>
  )
}

export default Home
