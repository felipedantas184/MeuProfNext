import Head from 'next/head'
import { SubjectsList, TeachersList } from "../components/Teachers/TeachersData";
import Image from "next/image";
import Pricing from "../components/Pricing";
import Link from 'next/link'
import { BtnWrap, ExtLink, TeachersBar, TeachersCard, TeachersDescription, TeachersImg, TeachersName, TeachersSubject, TeachersTextWrapper } from '../components/Teachers/TeachersStyles';
import { SmallButton } from '../components/ButtonElement';
import { SmallButtonTransparent } from '../components/ButtonTransparentElement';
import { AllPerSubjectColumn1, AllPerSubjectColumn2, AllPerSubjectContainer, AllPerSubjectRow, AllPerSubjectWrapper, AllTeachersContainer, AllTeachersRow, AllTeachersWrapper, BtnWrapTwo, Heading, HeadingGlow, TextWrapper } from '../components/AllPerSubject/AllPerSubjectStyles';
import { Link as LinkS } from "react-scroll";
import { ButtonPurple } from '../components/ButtonPurple';
import { BsChevronDoubleDown } from 'react-icons/bs';

export const getStaticPaths = async () => {  
    // map data to an array of path objects with params (id)
    const paths = SubjectsList.map(subject => {
      return {
        params: { subject: subject.name.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }


  export const getStaticProps = async (context) => {
    const subject = context.params.subject;
    const data = TeachersList.filter(item => item.subject == subject );

    return {
      props: { teachers: data, subject: subject }
    }
  }


  const Details = ({ teachers, subject }) => {
    return (
      <>
      <Head>
        <title>{subject} | Aulas Particulares MeuProf</title>

        <meta name="description" content={`Marque uma aula particular com ${teachers.name} e aproveite as vantagens do MeuProf!`}></meta>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      <AllPerSubjectContainer>
        <AllPerSubjectWrapper>
          <AllPerSubjectRow>
            <AllPerSubjectColumn1>
              <TextWrapper>
                <Heading>Professores de <HeadingGlow>{subject}</HeadingGlow></Heading>
              </TextWrapper>
            </AllPerSubjectColumn1>
            <AllPerSubjectColumn2>

            </AllPerSubjectColumn2>
          </AllPerSubjectRow>
        </AllPerSubjectWrapper>
      </AllPerSubjectContainer>

      <AllTeachersContainer id="teachers" >
        <AllTeachersWrapper>
          <AllTeachersRow>
            {teachers.map((teacher) => {
							return (
								<TeachersCard key={teacher.id} >
									<TeachersImg>
										<Image src={teacher.photo} alt="" width={115} height={115} />
									</TeachersImg>
									<TeachersTextWrapper>
										<TeachersName>{teacher.name}</TeachersName>
										<TeachersSubject>{teacher.subject}</TeachersSubject>
										<TeachersBar />
										<TeachersDescription>{teacher.description}</TeachersDescription>
										<BtnWrap>
											<ExtLink href={`https://api.whatsapp.com/send?phone=${teacher.number}&text=Ol%C3%A1!%20Encontrei%20voc%C3%AA%20pelo%20MeuProf!%20`} target="blank" >
												<SmallButton>Conversar</SmallButton>
											</ExtLink>
											<Link href={"/professores/" + teacher.slug} passHref >
												<SmallButtonTransparent>Conhecer</SmallButtonTransparent>
											</Link>
										</BtnWrap>
									</TeachersTextWrapper>
								</TeachersCard>
							)
						})}
          </AllTeachersRow>
          <BtnWrapTwo>
            <Link href="/" passHref >
              <ButtonPurple border>Ver Mais Professores</ButtonPurple>
            </Link>
            <LinkS to='pricing'
              smooth={true} duration={500} spy={true} exact='true' offset={-60}>
            <ButtonPurple border><BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginRight: 16}} />Confira Nossos Planos<BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginLeft: 16}} /></ButtonPurple>
            </LinkS>
          </BtnWrapTwo>
        </AllTeachersWrapper>
      </AllTeachersContainer>      
      <Pricing />
      </>
    );
  }
  
  export default Details;