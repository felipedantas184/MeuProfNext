import { ButtonWrapper, HeroContainer, GridWrapper, HalfWrapper, Heading, Subtitle, TextWrapper, ButtonScorll, ImageWrapper } from "../../components/UsefulComponents";
import Image from 'next/image'

const Hero = () => {
	return ( 
		<HeroContainer>
			<GridWrapper>
				<HalfWrapper start='true'>
					<TextWrapper>
						<Heading>AULAS PARTICULARES<br />& ENEM</Heading>
						<Subtitle>Marque sua aula particular e prepare-se para o vestibular com os melhores!</Subtitle>
					</TextWrapper>
					<ButtonWrapper>
						<ButtonScorll to='teachers'	light='true'
							smooth={true} duration={500} spy={true} exact='true' offset={-20}>
							Aulas Particulares
						</ButtonScorll>
						<ButtonScorll to='start' dark='true'
							smooth={true} duration={500} spy={true} exact='true' offset={0}>
							Preparação ENEM
						</ButtonScorll>
					</ButtonWrapper>	
				</HalfWrapper>
				<HalfWrapper>
				<ImageWrapper>
					<Image src='/SVGs/heroImage.png' alt="MeuProf Aula Particular & Enem" layout="fill" />
				</ImageWrapper>
				</HalfWrapper>
			</GridWrapper>
		</HeroContainer>
		);
}
 
export default Hero;