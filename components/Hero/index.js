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
								<LinkS to='teachers'
             					smooth={true} duration={500} spy={true} exact='true' offset={-60}>
									<Button book shadow>Agendar Horário</Button>
								</LinkS>
								<LinkS to='highlights'
             					smooth={true} duration={500} spy={true} exact='true' offset={-60}>
								<ButtonTransparent book>Conhecer Mais</ButtonTransparent>
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