import { ButtonWrapper, HeroContainer, GridWrapper, HalfWrapper, Heading, Subtitle, TextWrapper, ButtonScorll, ImageWrapper } from "../components/UsefulComponents";
import Image from 'next/image'
import Teachers from '../components/Teachers'
import Perks from '../components/Perks'
import Highlights from '../components/Highlights'
import Enem from "../components/Enem";

const Test = () => {
	return ( 
		<>
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
							smooth={true} duration={500} spy={true} exact='true' offset={-20}>
							Preparação ENEM
						</ButtonScorll>
					</ButtonWrapper>	
				</HalfWrapper>
				<HalfWrapper>
				<ImageWrapper>
					<Image src='/SVGs/svg-6.svg' alt="Hero Image" layout="fill" />
				</ImageWrapper>
				</HalfWrapper>
			</GridWrapper>
		</HeroContainer>
		<Teachers />
		<Highlights />
		<Perks />

		<Enem />
		</>
		);
}
 
export default Test;