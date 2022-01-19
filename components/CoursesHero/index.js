import { ButtonWrapper, HeroContainer, GridWrapper, HalfWrapper, Heading, Subtitle, TextWrapper, ButtonScorll, ImageWrapper } from "../UsefulComponents";
import Image from 'next/image'

const CoursesHero = () => {
	return ( 
		<HeroContainer id="hero">
			<GridWrapper>
				<HalfWrapper start='true'>
					<TextWrapper>
						<Heading>CURSO DE MATEMÁTICA</Heading>
						<Subtitle>Estude matemática para o Enem de forma correta e fique mais próximo da sua aprovação!</Subtitle>
					</TextWrapper>
					<ButtonWrapper>
						<ButtonScorll to='teachers'	light='true'
							smooth={true} duration={500} spy={true} exact='true' offset={-20}>
							QUERO PARTICIPAR!
						</ButtonScorll>
						<ButtonScorll to='perks' dark='true'
							smooth={true} duration={500} spy={true} exact='true' offset={0}>
							CONHECER MAIS
						</ButtonScorll>
					</ButtonWrapper>	
				</HalfWrapper>
				<HalfWrapper>
				<ImageWrapper>
					<Image src='/SVGs/coursesImage.png' alt="MeuProf Aula Particular & Enem" layout="fill" />
				</ImageWrapper>
				</HalfWrapper>
			</GridWrapper>
		</HeroContainer>
		);
}
 
export default CoursesHero;