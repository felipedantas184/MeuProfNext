import { ButtonWrapper, HeroContainer, GridWrapper, HalfWrapper, Heading, Subtitle, TextWrapper, ButtonScorll, ImageWrapper } from "../UsefulComponents";
import Image from 'next/image'

const CoursesHero = () => {
	return ( 
		<HeroContainer id="hero">
			<GridWrapper>
				<HalfWrapper start='true'>
					<TextWrapper>
						<Heading>MATEMÁTICA <br/>ATIVA MEUPROF</Heading>
						<Subtitle>Estude matemática para o Enem de forma correta e fique mais próximo da sua aprovação!</Subtitle>
					</TextWrapper>
					<ButtonWrapper>
						<ButtonScorll to='offer' light='true'
							smooth={true} duration={500} spy={true} exact='true' offset={20}>
							FAZER INSCRIÇÃO!
						</ButtonScorll>
						<ButtonScorll to='coursesPerks' dark='true'
							smooth={true} duration={1000} spy={true} exact='true' offset={0}>
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