import { Heading, CoursesScoresColumn1, CoursesScoresColumn2, CoursesScoresContainer, CoursesScoresHeading, CoursesScoresRow, CoursesScoresWrapper, ImgWrap, ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesRow, Subtitle, TextWrapper } from "./CoursesScoresStyles";
import Image from 'next/image'
import { Button, ButtonScorll, ImageWrapper } from "../UsefulComponents";

const CoursesScores = () => {
    return ( 
        <CoursesScoresContainer id="CoursesScores">
					<CoursesScoresWrapper>
						<CoursesScoresHeading>Motivos</CoursesScoresHeading>
						<CoursesScoresRow>
							<CoursesScoresColumn2 style={{display: 'flex', justifyContent: "flex-start"}}>
									<Image src='/SVGs/ScoresRight.png' width={400} height={690} />
							</CoursesScoresColumn2>
							<CoursesScoresColumn1 style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
								<TextWrapper first>
									<Heading>Método Que<br/> Dá Resultado</Heading>
									<Subtitle>Acreditamos que botar em prática o conhecimento que foi trabalho anteriormente é essencial para um bom desempenho.</Subtitle>
								</TextWrapper>
								<TextWrapper second style={{marginTop: 48, marginBottom: 48}}>
									<Heading>Planejamento<br/>dos Estudos</Heading>
									<Subtitle>Acreditamos que botar em prática o conhecimento que foi trabalho anteriormente é essencial para um bom desempenho.</Subtitle>
								</TextWrapper>
								<ButtonScorll to='teachers' light='true' style={{marginTop: 0}}
									smooth={true} duration={500} spy={true} exact='true' offset={-20}>
									Fazer Inscrição Agora!
								</ButtonScorll>
							</CoursesScoresColumn1>
						</CoursesScoresRow>

						<CoursesScoresRow>
							<CoursesScoresColumn2 style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
								<TextWrapper third>
									<Heading>Foco em <br/> Exercícios</Heading>
									<Subtitle>Acreditamos que botar em prática o conhecimento que foi trabalho anteriormente é essencial para um bom desempenho.</Subtitle>
								</TextWrapper>
								<TextWrapper fourth style={{marginTop: 48, marginBottom: 48}}>
									<Heading>Mais Perto<br /> Da Aprovação</Heading>
									<Subtitle>Acreditamos que botar em prática o conhecimento que foi trabalho anteriormente é essencial para um bom desempenho.</Subtitle>
								</TextWrapper>
								<ButtonScorll to='teachers' light='true' style={{marginTop: 0}}
									smooth={true} duration={500} spy={true} exact='true' offset={-20}>
									Fazer Inscrição Agora!
								</ButtonScorll>
							</CoursesScoresColumn2>
							<CoursesScoresColumn1 style={{display: 'flex', justifyContent: "flex-end"}} >
								<Image src='/SVGs/Scores.png' width={400} height={690} />
							</CoursesScoresColumn1>
						</CoursesScoresRow>					
					</CoursesScoresWrapper>
				</CoursesScoresContainer>
     );
}
 
export default CoursesScores;