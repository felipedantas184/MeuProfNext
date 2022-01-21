import Head from 'next/head'
import { TeachersList } from "../../components/Teachers/TeachersData";
import Image from "next/image";
import { BtnWrap, DetailsColumn1, DetailsColumn2, DetailsContainer, DetailsRow, DetailsWrapper, ExtLink, Heading, ImgWrap, SbjWrap, Subtitle, TextWrapper } from "../../components/Details/DetailsStyles";
import { ButtonTransparent } from "../../components/ButtonTransparentElement";
import { Link as LinkS } from "react-scroll";
import { BsChevronDoubleDown } from "react-icons/bs";
import { ButtonPurple } from "../../components/ButtonPurple";
import Link from 'next/link'
import Teachers from '../../components/Teachers';
import { ButtonLink, ButtonWrapper } from '../../components/UsefulComponents';



export const getStaticPaths = async () => {  
    // map data to an array of path objects with params (id)
    const paths = TeachersList.map(teacher => {
      return {
        params: { slug: teacher.slug.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const data = TeachersList.filter(item => item.slug == slug );

    return {
      props: { teacher: data[0] }
    }
  }


  const Details = ({ teacher }) => {
    return (
      <>
      <Head>
        <title>{teacher.name} | Aulas Particulares MeuProf</title>

        <meta name="description" content={`Marque uma aula particular com ${teacher.name} e aproveite as vantagens do MeuProf!`}></meta>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content={`${teacher.name} | Aulas Particulares MeuProf`}/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content={`Marque uma aula particular com ${teacher.name} e aproveite as vantagens do MeuProf!`}/>
        <meta property="og:image" content={teacher.photo}/>
        <meta property="og:site_name" content="MeuProf"/>

        <meta property="twitter:title" content={`${teacher.name} | Aulas Particulares MeuProf`}/>
        <meta property="twitter:url" content="https://meuprof.app.br/"/>
        <meta property="twitter:description" content={`Marque uma aula particular com ${teacher.name} e aproveite as vantagens do MeuProf!`}/>
        <meta property="twitter:image" content={teacher.photo}/>
      </Head>

      <DetailsContainer>
        <DetailsWrapper>
          <DetailsRow>
            <DetailsColumn1>
              <ImgWrap>
                <Image src={teacher.photo} width={300} height={300} alt={teacher.name} />
              </ImgWrap>
            </DetailsColumn1>

            <DetailsColumn2>
              <TextWrapper>
                <Heading>{teacher.name}</Heading>
                <SbjWrap>
                  <Link href={"/" + teacher.subjects.FirstUrl} passHref >
                    <ButtonTransparent noAdjust >{teacher.subjects.First}</ButtonTransparent>
                  </Link>
                  <Link href={"/" + teacher.subjects.SecondUrl} passHref >
                    <ButtonTransparent noAdjust >{teacher.subjects.Second}</ButtonTransparent>
                  </Link>
                  {(teacher.subjects.Third != null) && (
                    <Link href={"/" + teacher.subjects.ThirdUrl} passHref >
                      <ButtonTransparent noAdjust >{teacher.subjects.Third}</ButtonTransparent>
                    </Link>
                  )}
                </SbjWrap>
                <Subtitle>{teacher.fullDescription}</Subtitle>
                <ButtonWrapper style={{maxWidth: 500}} >
                  <ButtonLink href={`https://api.whatsapp.com/send?phone=${teacher.number}&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20particular.%0APode%20me%20ajudar%3F`} target="blank"  light='true' style={{marginLeft: 0}} >
                    Agendar Horário
                  </ButtonLink>
                </ButtonWrapper>
              </TextWrapper>
            </DetailsColumn2>
          </DetailsRow>  

          <BtnWrap>
            <Link href="/#teachers" passHref >
              <ButtonPurple border>Voltar Para o Início</ButtonPurple>
            </Link>
            <LinkS to='teachers'
              smooth={true} duration={500} spy={true} exact='true' offset={-60}>
            <ButtonPurple border><BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginRight: 16}} />Conheça Mais Professores<BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginLeft: 16}} /></ButtonPurple>
            </LinkS>
          </BtnWrap>        
        </DetailsWrapper>
      </DetailsContainer>

      <Teachers />
      </>
    );
  }
  
  export default Details;