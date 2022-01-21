import { Heading, CoursesAboutColumn1, CoursesAboutColumn2, CoursesAboutContainer, CoursesAboutHeading, CoursesAboutRow, CoursesAboutWrapper, ImgWrap, ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesRow, Subtitle, TextWrapper, ProfilePicWrap } from "./CoursesAboutStyles";
import Image from 'next/image'
import { Button, ButtonScorll, ImageWrapper } from "../UsefulComponents";
import { SbjWrap } from "../Details/DetailsStyles";
import { ButtonTransparent } from "../ButtonTransparentElement";

const CoursesAbout = () => {
    return ( 
        <CoursesAboutContainer id="CoursesAbout">
					<CoursesAboutWrapper>
						<CoursesAboutHeading>Motivos</CoursesAboutHeading>
						<CoursesAboutRow>
							<CoursesAboutColumn1>
								<ProfilePicWrap>
									<Image src='/AndreMeuProf.jpg' layout="fill" />
								</ProfilePicWrap>
							</CoursesAboutColumn1>
							<CoursesAboutColumn2>
								<TextWrapper first>
									<Heading>André Isac</Heading>
									<SbjWrap>
										<ButtonTransparent noAdjust>Medicina UFPI</ButtonTransparent>
										<ButtonTransparent noAdjust>Medicina UESPI</ButtonTransparent>
										<ButtonTransparent noAdjust>926 em Matemática</ButtonTransparent>
										<ButtonTransparent noAdjust>820,8 Média Geral</ButtonTransparent>
									</SbjWrap>
									<Subtitle>Me chamo André e fui aprovado para Medicina na UFPI (Picos) e na UESPI. Atualmente ajudo alunos a conquistarem sua aprovação com a nota do Enem!</Subtitle>
								</TextWrapper>
								<ButtonScorll to='offer' light='true'
									smooth={true} duration={500} spy={true} exact='true' offset={20}>
									Fazer Inscrição Agora!
								</ButtonScorll>
							</CoursesAboutColumn2>
						</CoursesAboutRow>

						<CoursesAboutRow style={{marginTop: 80}} invert >
							<CoursesAboutColumn2>
								<TextWrapper third>
									<Heading>Felipe Dantas</Heading>
									<SbjWrap>
										<ButtonTransparent noAdjust>Medicina UFPI</ButtonTransparent>
										<ButtonTransparent noAdjust>980,6 em Matemática</ButtonTransparent>
										<ButtonTransparent noAdjust>820,8 de Média Geral</ButtonTransparent>
									</SbjWrap>
									<Subtitle>Me chamo Felipe e sou acadêmico de Medicina pela UFPI. Eu e o André montamos esse curso para ajudar cada vez mais estudantes a conquistarem uma vaga na Universidade!</Subtitle>
								</TextWrapper>
								<ButtonScorll to='offer' light='true'
									smooth={true} duration={500} spy={true} exact='true' offset={20}>
									Fazer Inscrição Agora!
								</ButtonScorll>
							</CoursesAboutColumn2>
							<CoursesAboutColumn1>
								<ProfilePicWrap>
									<Image src='/FelipeMeuProf.jpg' layout="fill" />
								</ProfilePicWrap>		
							</CoursesAboutColumn1>
						</CoursesAboutRow>					
					</CoursesAboutWrapper>
				</CoursesAboutContainer>
     );
}
 
export default CoursesAbout;