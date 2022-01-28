import Head from 'next/head'
import CoursesPerks from '../components/CoursesPerks'
import CoursesScores from '../components/CoursesScores'
import CoursesAbout from '../components/CoursesAbout'
import CoursesClasses from '../components/CoursesClasses'
import MentoriaHero from '../components/MentoriaHero'
import MentoriaPerks from '../components/MentoriaPerks'
import MentoriaScores from '../components/MentoriaScores'
import MentoriaOffer from '../components/MentoriaOffer'
import MentoriaClasses from '../components/MentoriaClasses'

export default function Home() {
  return (
    <>
      <Head>
        <title>MENTORIA ENEM - MeuProf | Aulas Particulares & Enem</title>
        <meta name="description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="MENTORIA ENEM - MeuProf | Aulas Particulares & Enem"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="MeuProf"/>

        <meta property="twitter:title" content="MENTORIA ENEM - MeuProf | Aulas Particulares & Enem"/>
        <meta property="twitter:url" content="https://meuprof.app.br/mentoria/"/>
        <meta property="twitter:description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <MentoriaHero />
      <MentoriaPerks />
      <MentoriaScores />
      <MentoriaClasses />
      <CoursesAbout />
      <MentoriaOffer />
    </>
  )
}
