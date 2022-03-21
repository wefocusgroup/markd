import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ChitChat from '../src/components/ChitChat'

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
      </div>
    </div>
  )
}

export default Home
