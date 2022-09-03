import Head from 'next/head'
import About from '../components/About'
import UpperSec from '../components/UpperSec'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UpperSec />
      <About />

    </div>
  )
}