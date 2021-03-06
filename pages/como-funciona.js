import Head from 'next/head'
import Guide from '../components/Guide'

import { GuideOne, GuideTwo, GuideThree} from '../components/Guide/GuideData'

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>Como Funciona - MeuProf | Aulas Particulares & Enem</title>
        <meta name="description" content="Encontrar o professor particular ideal para você nunca foi tão fácil! Confira o tutorial de como utilizar a plataforma MeuProf." />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />


        <meta property="og:title" content="Como Funciona - MeuProf | Aulas Particulares & Enem"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Encontrar o professor particular ideal para você nunca foi tão fácil! Confira o tutorial de como utilizar a plataforma MeuProf."/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="MeuProf"/>

        <meta property="twitter:title" content="Como Funciona - MeuProf | Aulas Particulares & Enem"/>
        <meta property="twitter:url" content="https://meuprof.app.br/como-funciona/"/>
        <meta property="twitter:description" content="Encontrar o professor particular ideal para você nunca foi tão fácil! Confira o tutorial de como utilizar a plataforma MeuProf."/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <Guide {...GuideOne} />
      <Guide {...GuideTwo} />
      <Guide {...GuideThree} />
    </>
  )
}
