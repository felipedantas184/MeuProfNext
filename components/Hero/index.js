import { Button } from "../ButtonElement";
import { BtnWrap, ExtLink, Heading, HeroColumn1, HeroColumn2, HeroContainer, HeroRow, HeroWrapper, ImgWrap, Subtitle, TextWrapper, TopLine } from "./HeroStyles";
import Image from 'next/image'
import { ButtonTransparent } from "../ButtonTransparentElement";
import { Link as LinkS } from "react-scroll";

const Hero = () => {
	return ( 
		<HeroContainer>
			<HeroWrapper>
				<HeroRow>
					<HeroColumn1>
						<TextWrapper>
							<Heading>Precisa de Aulas Particulares?</Heading>
							<Subtitle>Com o MeuProf você encontra o professor ideal para te ensinar as matérias que você quiser!</Subtitle>
							<BtnWrap>
								<ExtLink href="https://api.whatsapp.com/send?phone=5586995185757&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20particular.%0APode%20me%20ajudar%3F" target="blank" >
									<Button shadow>Agendar Horário</Button>
								</ExtLink>
								<LinkS to='teachers'
             					smooth={true} duration={500} spy={true} exact='true' offset={-60}>
								<ButtonTransparent>Conhecer Mais</ButtonTransparent>
								</LinkS>
							</BtnWrap>
						</TextWrapper>
					</HeroColumn1>
					<HeroColumn2>
						<ImgWrap>
							<Image src='/SVGs/svg-6.svg' alt="Hero Image" width={450} height={450}/>
						</ImgWrap>
					</HeroColumn2>
				</HeroRow>
			</HeroWrapper>
		</HeroContainer>
		);
}
 
export default Hero;