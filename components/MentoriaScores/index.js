import { Heading, MentoriaScoresColumn1, MentoriaScoresColumn2, MentoriaScoresContainer, MentoriaScoresHeading, MentoriaScoresRow, MentoriaScoresWrapper, ImgWrap, ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesRow, Subtitle, TextWrapper } from "./MentoriaScoresStyles";
import Image from 'next/image'
import { Button, ButtonScorll, ImageWrapper } from "../UsefulComponents";

const MentoriaScores = () => {
    return ( 
        <MentoriaScoresContainer id="MentoriaScores">
					<MentoriaScoresWrapper>
						<MentoriaScoresHeading>Motivos</MentoriaScoresHeading>
						<MentoriaScoresRow>
							<MentoriaScoresColumn2 style={{display: 'flex', justifyContent: "flex-start"}}>
									<Image src='/SVGs/ScoresRight.png' width={400} height={690} />
							</MentoriaScoresColumn2>
							<MentoriaScoresColumn1 style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
								<TextWrapper first>
									<Heading>Aumente <br />Seus Acertos</Heading>
									<Subtitle>Se você não consegue sair da mesma pontuação nos simulados, a mentoria é definitivamente para você! Tá esperando o quê?</Subtitle>
								</TextWrapper>
								<TextWrapper second style={{marginTop: 48, marginBottom: 48}}>
									<Heading>Organização<br/>dos Estudos</Heading>
									<Subtitle>Te ajudamos a planejar e a montar uma rotina que realmente funcione para você e que te faça acançar melhores resultados!</Subtitle>
								</TextWrapper>
								<ButtonScorll to='offer' light='true' style={{marginTop: 0}}
									smooth={true} duration={500} spy={true} exact='true' offset={20}>
									Fazer Inscrição Agora!
								</ButtonScorll>
							</MentoriaScoresColumn1>
						</MentoriaScoresRow>

						<MentoriaScoresRow>
							<MentoriaScoresColumn2 style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
								<TextWrapper third>
									<Heading>Por Onde <br/>Começar</Heading>
									<Subtitle>Guiamos seus estudos desde o início e mostramos os atalhos para conseguir chegar confiante e preparado para a prova do Enem!</Subtitle>
								</TextWrapper>
								<TextWrapper fourth style={{marginTop: 48, marginBottom: 48}}>
									<Heading>Mais Perto<br /> Da Aprovação</Heading>
									<Subtitle>Sem dúvidas um estudo orientado é muito mais eficiente, ainda mais quando a orientação vem de ex-vestibulando preparados de verdade para te ajudar.</Subtitle>
								</TextWrapper>
								<ButtonScorll to='offer' light='true' style={{marginTop: 0}}
									smooth={true} duration={500} spy={true} exact='true' offset={20}>
									Fazer Inscrição Agora!
								</ButtonScorll>
							</MentoriaScoresColumn2>
							<MentoriaScoresColumn1 style={{display: 'flex', justifyContent: "flex-end"}} >
								<Image src='/SVGs/Scores.png' width={400} height={690} />
							</MentoriaScoresColumn1>
						</MentoriaScoresRow>					
					</MentoriaScoresWrapper>
				</MentoriaScoresContainer>
     );
}
 
export default MentoriaScores;