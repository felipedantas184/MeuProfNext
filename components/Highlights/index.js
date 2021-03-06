import { Heading, HighlightsColumn1, HighlightsColumn2, HighlightsContainer, HighlightsHeading, HighlightsRow, HighlightsWrapper, ImgWrap, ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesRow, Subtitle, TextWrapper } from "./HighlightsStyles";
import Image from 'next/image'
import { Button, ButtonScorll } from "../UsefulComponents";

const Highlights = () => {
    return ( 
        <HighlightsContainer id="highlights">
					<HighlightsWrapper>
						<HighlightsHeading>Motivos</HighlightsHeading>
						<HighlightsRow>
							<HighlightsColumn1>
								<TextWrapper first>
									<Heading>Ensino Médio <br/> e Fundamental</Heading>
									<Subtitle>Nossa equipe é formada por professores preparados para ensinar alunos de vários anos escolares, do ensino fundamental ao médio.</Subtitle>
								</TextWrapper>
							</HighlightsColumn1>
							<HighlightsColumn2>
								<TextWrapper>
									<Heading>Foco em <br/> Exercícios</Heading>
									<Subtitle>Acreditamos que botar em prática o conhecimento que foi trabalho anteriormente é essencial para um bom desempenho.</Subtitle>
								</TextWrapper>
							</HighlightsColumn2>
						</HighlightsRow>
						<ButtonScorll to='teachers' light='true' style={{marginTop: 48}}
							smooth={true} duration={500} spy={true} exact='true' offset={-20}>
							Marcar Aula Particular
						</ButtonScorll>					
					</HighlightsWrapper>
				</HighlightsContainer>
     );
}
 
export default Highlights;