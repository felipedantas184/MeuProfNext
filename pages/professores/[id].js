import { TeachersList } from "../../components/Teachers/TeachersData";
import Image from "next/image";
import { BtnWrap, DetailsColumn1, DetailsColumn2, DetailsContainer, DetailsRow, DetailsWrapper, ExtLink, Heading, ImgWrap, SbjWrap, Subtitle, TextWrapper } from "../../components/Details/DetailsStyles";
import { ButtonTransparent } from "../../components/ButtonTransparentElement";
import { Link as LinkS } from "react-scroll";
import { Button} from "../../components/ButtonElement";
import { BsChevronDoubleDown } from "react-icons/bs";
import Pricing from "../../components/Pricing";
import { ButtonPurple } from "../../components/ButtonPurple";
import Link from 'next/link'



export const getStaticPaths = async () => {  
    // map data to an array of path objects with params (id)
    const paths = TeachersList.map(teacher => {
      return {
        params: { id: teacher.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = TeachersList.filter(item => item.id == id );

    return {
      props: { teacher: data[0] }
    }
  }


  const Details = ({ teacher }) => {
    return (
      <>
      <DetailsContainer id="teachers" >
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
                  <ButtonTransparent noAdjust >{teacher.subjects.First}</ButtonTransparent>
                  <ButtonTransparent noAdjust >{teacher.subjects.Second}</ButtonTransparent>
                  <ButtonTransparent noAdjust >{teacher.subjects.Third}</ButtonTransparent>
                </SbjWrap>
                <Subtitle>{teacher.fullDescription}</Subtitle>
                <BtnWrap>
                  <ExtLink href="https://api.whatsapp.com/send?phone=5586995185757&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20particular.%0APode%20me%20ajudar%3F" target="blank" >
                    <Button big shadow>Agendar Horário</Button>
                  </ExtLink>
                </BtnWrap>
              </TextWrapper>
            </DetailsColumn2>
          </DetailsRow>  

          <BtnWrap>
            <Link href="/" passHref >
              <ButtonPurple border>Ver Mais Professores</ButtonPurple>
            </Link>
            <LinkS to='pricing'
              smooth={true} duration={500} spy={true} exact='true' offset={-60}>
            <ButtonPurple border><BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginRight: 16}} />Confira Nossos Planos<BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginLeft: 16}} /></ButtonPurple>
            </LinkS>
          </BtnWrap>        
        </DetailsWrapper>
      </DetailsContainer>

      <Pricing />
      </>
    );
  }
  
  export default Details;