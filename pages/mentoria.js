import Head from 'next/head'
import CoursesPerks from '../components/CoursesPerks'
import CoursesScores from '../components/CoursesScores'
import CoursesAbout from '../components/CoursesAbout'
import CoursesClasses from '../components/CoursesClasses'
import MentoriaHero from '../components/MentoriaHero'

export default function Home() {
  return (
    <>
      <Head>
        <title>MeuProf | Aulas Particulares & Enem</title>
        <meta name="description" content="Aulas Particulares e Preparação Enem com o MeuProf. Marque sua aula particular e prepare-se para o vestibular com os melhores!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="MeuProf | Aulas Particulares & Enem"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Aulas Particulares e Preparação Enem com o MeuProf. Marque sua aula particular e prepare-se para o vestibular com os melhores!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="MeuProf"/>

        <meta property="twitter:title" content="MeuProf | Aulas Particulares"/>
        <meta property="twitter:url" content="https://meuprof.app.br/"/>
        <meta property="twitter:description" content="Aulas Particulares e Preparação Enem com o MeuProf. Marque sua aula particular e prepare-se para o vestibular com os melhores!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <MentoriaHero />
      <CoursesPerks />
      <CoursesScores />
      <CoursesClasses />
      <CoursesAbout />
    </>
  )
}
