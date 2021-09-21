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
        <title>Meu Prof | Aulas Particulares</title>
        <meta name="description" content="Aulas Particulares com MeuProf. Encontre o professor ideal para te ensinar as matérias que você precisa!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      <Hero />
      <Teachers />
      <Highlights />
      <Perks />
      <Pricing />
    </>
  )
}
