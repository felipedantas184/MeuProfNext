import Head from 'next/head'
import Guide from '../components/Guide'

import { GuideOne, GuideTwo, GuideThree} from '../components/Guide/GuideData'

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>MeuProf | Aulas Particulares</title>
        <meta name="description" content="Aulas Particulares com MeuProf. Encontre o professor ideal para te ensinar as matérias que você precisa!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      <Guide {...GuideOne} />
      <Guide {...GuideTwo} />
      <Guide {...GuideThree} />
    </>
  )
}
