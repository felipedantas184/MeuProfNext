import { Container, GridWrapper, ButtonScorll, HalfUnicWrapper, ImageWrapper, LogoImageWrapper } from "../../components/UsefulComponents";
import { HeadingPrinciapl, HeadingTop, TextWrapper, Subtitle, ButtonWrapper } from "./EnemStyles";
import Image from 'next/image'

const Enem = () => {
    return ( 
      <Container id="start">
				<GridWrapper>
					<HalfUnicWrapper start='true'>
						<LogoImageWrapper>
							<Image src='/MeuProfLogo.png' alt="Hero Image" layout='fill' />
						</LogoImageWrapper>
						<TextWrapper>
							<HeadingTop>PREPARAÇÃO</HeadingTop>
							<HeadingPrinciapl>ENEM</HeadingPrinciapl>
							<Subtitle style={{textAlign: 'center'}}>Conquiste sua aprovação com a ajuda de quem conhece bem o caminho a se seguir!</Subtitle>
						</TextWrapper>
						<ButtonWrapper>
							<ButtonScorll to='teachers'	light='true'
								smooth={true} duration={500} spy={true} exact='true' offset={-60}>
								Conhecer Cursos
							</ButtonScorll>
							<ButtonScorll to='highlights' dark='true'
								smooth={true} duration={500} spy={true} exact='true' offset={-60}>
								Mentoria ENEM
							</ButtonScorll>
						</ButtonWrapper>
					</HalfUnicWrapper>
				</GridWrapper>
			</Container>
     );
}
 
export default Enem;
