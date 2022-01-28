import Head from 'next/head'
import { ButtonTransparent } from '../components/ButtonTransparentElement'
import Guide from '../components/Guide'

import { GuideOne, GuideTwo, GuideThree, GuideFour, GuideFive, GuideSix, GuideSeven} from '../components/Guide/GuideData'

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>START ENEM - MeuProf | Aulas Particulares & Enem</title>
        <meta name="description" content="SUPER REVISÃO + MENTORIA Meu Prof! Nós organizamos um projeto especial de revisão para vocês ficarem ainda mais seguros nessa reta final!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />


        <meta property="og:title" content="START ENEM - MeuProf | Aulas Particulares & Enem"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="SUPER REVISÃO + MENTORIA Meu Prof! Nós organizamos um projeto especial de revisão para vocês ficarem ainda mais seguros nessa reta final!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="MeuProf"/>

        <meta property="twitter:title" content="START ENEM - MeuProf | Aulas Particulares & Enem"/>
        <meta property="twitter:url" content="https://meuprof.app.br/start-enem/"/>
        <meta property="twitter:description" content="SUPER REVISÃO + MENTORIA Meu Prof! Nós organizamos um projeto especial de revisão para vocês ficarem ainda mais seguros nessa reta final!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <Guide {...GuideFour} />
      <Guide {...GuideFive} />
      <Guide {...GuideSix} />
      <Guide {...GuideSeven} />
    </>
  )
}
