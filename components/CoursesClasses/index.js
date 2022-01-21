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
							<CoursesClassesColumn2 style={{alignSelf: 'flex-start'}} >
								<TextWrapper first>
									<Heading>Estudo <br/>Inteligente</Heading>
									<Subtitle>Separamos os assuntos das primeiras listas de uma maneira inteligente que facilitará seu aprendizado.!</Subtitle>
								</TextWrapper>
							</CoursesClassesColumn2>
						</CoursesClassesRow>

						<CoursesClassesRow style={{marginTop: 40}} invert >
							<CoursesClassesColumn1>
								<BoxWrap>
									<Image src='/cronogramaII.png' width={630} height={360} />
								</BoxWrap>		
							</CoursesClassesColumn1>
							<CoursesClassesColumn2 style={{alignSelf: 'flex-start'}} >
								<TextWrapper third >
									<Heading>Questões &<br />Monitorias</Heading>
									<Subtitle>Além das listas de questões e do grupo de WhatsApp, você também terá direito a monitorias ao vivo para tirar suas dúvidas e buscar orientações!</Subtitle>
								</TextWrapper>
							</CoursesClassesColumn2>
						</CoursesClassesRow>		
						<ButtonScorll to='offer' dark='true' style={{marginTop: 32}}
							smooth={true} duration={500} spy={true} exact='true' offset={20}>
							Fazer Inscrição Agora!
						</ButtonScorll>			
					</CoursesClassesWrapper>
				</CoursesClassesContainer>
     );
}
 
export default CoursesClasses;