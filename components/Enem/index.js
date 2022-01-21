import { Container, GridWrapper, ButtonScorll, HalfUnicWrapper, ImageWrapper, LogoImageWrapper, ButtonInternalLink } from "../../components/UsefulComponents";
import { HeadingPrinciapl, HeadingTop, TextWrapper, Subtitle, ButtonWrapper } from "./EnemStyles";
import Image from 'next/image'
import Link from 'next/link'

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
							<Link href='/cursos'>
								<ButtonInternalLink light='true'>
									Conhecer Cursos
								</ButtonInternalLink>
							</Link>
							<Link href='/mentoria'>
								<ButtonInternalLink dark='true'>
									Mentoria ENEM
								</ButtonInternalLink>
							</Link>
						</ButtonWrapper>
					</HalfUnicWrapper>
				</GridWrapper>
			</Container>
     );
}
 
export default Enem;
