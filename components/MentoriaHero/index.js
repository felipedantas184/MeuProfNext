import { ButtonWrapper, HeroContainer, GridWrapper, HalfWrapper, Heading, Subtitle, TextWrapper, ButtonScorll, ImageWrapper } from "../UsefulComponents";
import Image from 'next/image'

const MentoriaHero = () => {
	return ( 
		<HeroContainer id="hero">
			<GridWrapper>
				<HalfWrapper start='true'>
					<TextWrapper>
						<Heading>MENTORIA ENEM<br />MEUPROF</Heading>
						<Subtitle>Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!</Subtitle>
					</TextWrapper>
					<ButtonWrapper>
						<ButtonScorll to='offer'	light='true'
							smooth={true} duration={500} spy={true} exact='true' offset={20}>
							QUERO PARTICIPAR!
						</ButtonScorll>
						<ButtonScorll to='offer' dark='true'
							smooth={true} duration={1000} spy={true} exact='true' offset={20}>
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
 
export default MentoriaHero;