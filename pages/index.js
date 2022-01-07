import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/ButtonElement'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Perks from '../components/Perks'
import Pricing from '../components/Pricing'
import Teachers from '../components/Teachers'
import Guide from '../components/Guide'
import { GuideEight } from '../components/Guide/GuideData'
import Enem from '../components/Enem'

export default function Home() {
  return (
    <>
      <Head>
        <title>MeuProf | Aulas Particulares</title>
        <meta name="description" content="Aulas Particulares e Preparação Enem com o MeuProf. Marque sua aula particular e prepare-se para o vestibular com os melhores!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="MeuProf | Aulas Particulares"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Aulas Particulares e Preparação Enem com o MeuProf. Marque sua aula particular e prepare-se para o vestibular com os melhores!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="MeuProf"/>

        <meta property="twitter:title" content="MeuProf | Aulas Particulares"/>
        <meta property="twitter:url" content="https://meu-prof-next.vercel.app/"/>
        <meta property="twitter:description" content="Aulas Particulares e Preparação Enem com o MeuProf. Marque sua aula particular e prepare-se para o vestibular com os melhores!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <Hero />
      <Teachers />
      <Highlights />
      <Perks />
      <Enem />
    </>
  )
}
