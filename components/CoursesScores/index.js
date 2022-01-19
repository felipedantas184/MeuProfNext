import { Heading, CoursesScoresColumn1, CoursesScoresColumn2, CoursesScoresContainer, CoursesScoresHeading, CoursesScoresRow, CoursesScoresWrapper, ImgWrap, ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesRow, Subtitle, TextWrapper } from "./CoursesScoresStyles";
import Image from 'next/image'
import { Button, ButtonScorll, ImageWrapper } from "../UsefulComponents";

const CoursesScores = () => {
    return ( 
        <CoursesScoresContainer id="CoursesScores">
					<CoursesScoresWrapper>
						<CoursesScoresHeading>Motivos</CoursesScoresHeading>
						<CoursesScoresRow>
							<CoursesScoresColumn1>
									<Image src='/SVGs/ScoresRight.png' width={400} height={690} />
							</CoursesScoresColumn1>
							<CoursesScoresColumn2 style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
								<TextWrapper first style={{marginTop: 48}}>
									<Heading>Foco em <br/> Exercícios</Heading>
									<Subtitle>Acreditamos que botar em prática o conhecimento que foi trabalho anteriormente é essencial para um bom desempenho.</Subtitle>
								</TextWrapper>
								<TextWrapper style={{marginTop: 48}}>
									<Heading>Foco em <br/> Exercícios</Heading>
									<Subtitle>Acreditamos que botar em prática o conhecimento que foi trabalho anteriormente é essencial para um bom desempenho.</Subtitle>
								</TextWrapper>
							</CoursesScoresColumn2>
						</CoursesScoresRow>

						<CoursesScoresRow>
							<CoursesScoresColumn1 style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
								<TextWrapper first style={{marginTop: 48}}>
									<Heading>Foco em <br/> Exercícios</Heading>
									<Subtitle>Acreditamos que botar em prática o conhecimento que foi trabalho anteriormente é essencial para um bom desempenho.</Subtitle>
								</TextWrapper>
								<TextWrapper style={{marginTop: 48}}>
									<Heading>Foco em <br/> Exercícios</Heading>
									<Subtitle>Acreditamos que botar em prática o conhecimento que foi trabalho anteriormente é essencial para um bom desempenho.</Subtitle>
								</TextWrapper>
							</CoursesScoresColumn1>
							<CoursesScoresColumn2>
								<Image src='/SVGs/Scores.png' width={400} height={690} />
							</CoursesScoresColumn2>
						</CoursesScoresRow>

						<ButtonScorll to='teachers' light='true' style={{marginTop: 0}}
							smooth={true} duration={500} spy={true} exact='true' offset={-20}>
							Fazer Inscrição Agora!
						</ButtonScorll>					
					</CoursesScoresWrapper>
				</CoursesScoresContainer>
     );
}
 
export default CoursesScores;