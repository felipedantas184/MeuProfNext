import Head from 'next/head'
import { ButtonTransparent } from '../components/ButtonTransparentElement'
import Guide from '../components/Guide'

import { GuideOne, GuideTwo, GuideThree, GuideFour, GuideFive, GuideSix, GuideSeven} from '../components/Guide/GuideData'

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>START ENEM - MeuProf | Aulas Particulares</title>
        <meta name="description" content="SUPER REVISÃO + MENTORIA Meu Prof! Nós organizamos um projeto especial de revisão para vocês ficarem ainda mais seguros nessa reta final!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />


        <meta property="og:title" content="Como Funciona - MeuProf | Aulas Particulares"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Encontrar o professor particular ideal para você nunca foi tão fácil! Confira o tutorial de como utilizar a plataforma MeuProf."/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="MeuProf"/>

        <meta property="twitter:title" content="Como Funciona - MeuProf | Aulas Particulares"/>
        <meta property="twitter:url" content="https://meu-prof-next.vercel.app/como-funciona/"/>
        <meta property="twitter:description" content="Encontrar o professor particular ideal para você nunca foi tão fácil! Confira o tutorial de como utilizar a plataforma MeuProf."/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <Guide {...GuideFour} />
      <Guide {...GuideFive} />
      <Guide {...GuideSix} />
      <Guide {...GuideSeven} />
    </>
  )
}
