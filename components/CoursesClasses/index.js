import { Heading, CoursesClassesColumn1, CoursesClassesColumn2, CoursesClassesContainer, CoursesClassesHeading, CoursesClassesRow, CoursesClassesWrapper, ImgWrap, ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesRow, Subtitle, TextWrapper, ProfilePicWrap, BoxWrap } from "./CoursesClassesStyles";
import Image from 'next/image'
import { Button, ButtonScorll, ImageWrapper } from "../UsefulComponents";
import { SbjWrap } from "../Details/DetailsStyles";
import { ButtonTransparent } from "../ButtonTransparentElement";

const CoursesClasses = () => {
    return ( 
        <CoursesClassesContainer id="CoursesClasses">
					<CoursesClassesWrapper>
						<CoursesClassesHeading>Cronograma</CoursesClassesHeading>
						<CoursesClassesRow>
							<CoursesClassesColumn1>
								<BoxWrap>
									<Image src='/cronogramaI.png' width={630} height={360} />
								</BoxWrap>
							</CoursesClassesColumn1>
							<CoursesClassesColumn2>
								<TextWrapper first>
									<Heading>Estudo <br/>Inteligente</Heading>
									<Subtitle>Me chamo André e fui aprovado para Medicina na UFPI (Picos) e na UESPI. Atualmente ajudo alunos a conquistarem sua aprovação com a nota do Enem!</Subtitle>
								</TextWrapper>
							</CoursesClassesColumn2>
						</CoursesClassesRow>

						<CoursesClassesRow style={{marginTop: 40}} invert >
							<CoursesClassesColumn1>
								<BoxWrap>
									<Image src='/cronogramaII.png' width={630} height={360} />
								</BoxWrap>		
							</CoursesClassesColumn1>
							<CoursesClassesColumn2>
								<TextWrapper third>
									<Heading>Questões &<br />Monitorias</Heading>
									<Subtitle>Me chamo Felipe e sou acadêmico de Medicina pela UFPI. Eu e o André montamos esse curso para ajudar cada vez mais estudantes a conquistarem uma vaga na Universidade!</Subtitle>
								</TextWrapper>
							</CoursesClassesColumn2>
						</CoursesClassesRow>		
						<ButtonScorll to='teachers' dark='true' style={{marginTop: 32}}
							smooth={true} duration={500} spy={true} exact='true' offset={-20}>
							Fazer Inscrição Agora!
						</ButtonScorll>			
					</CoursesClassesWrapper>
				</CoursesClassesContainer>
     );
}
 
export default CoursesClasses;