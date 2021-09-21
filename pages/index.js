import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/ButtonElement'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Perks from '../components/Perks'
import Pricing from '../components/Pricing'
import Teachers from '../components/Teachers'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Hero />
      <Teachers />
      <Highlights />
      <Perks />
      <Pricing />
    </>
  )
}
