import { FaCheck } from "react-icons/fa";
import { OfferContainer, GridWrapper, HalfUnicWrapper, OfferHeading, OfferSubtitle, TextWrapper, Topline, ToplineTwo, OfferTextWrapper, ButtonScorll, ListItem, OfferPricingCurrency, OfferPricingFigure, OfferPricingInterval, OfferPricingList, OfferPricingNumber, ButtonLink, OfferPricingFigureOlder, OfferPricingCurrencyOlder, OfferPricingNumberOlder } from "../UsefulComponents";

const CoursesOffer = () => {
	return (
		<OfferContainer id="offer" >
			<GridWrapper>
				<HalfUnicWrapper>
					<Topline>VAGAS LIMITADAS!</Topline>
					<ToplineTwo>Não perca tempo e garanta agora mesmo sua vaga!</ToplineTwo>
					
					<OfferTextWrapper>
					<div>
						<OfferHeading>MATEMÁTICA<br/>ATIVA</OfferHeading>
						<OfferSubtitle>Domine a matemática do Enem com um planejamento inteligente e com um método que funciona!</OfferSubtitle>
					</div>
					
					<div>
						<OfferPricingFigureOlder>
							<OfferPricingCurrencyOlder>R$ </OfferPricingCurrencyOlder><OfferPricingNumberOlder>147,00</OfferPricingNumberOlder>
						</OfferPricingFigureOlder>
						<OfferPricingFigure>
							<OfferPricingCurrency>R$ </OfferPricingCurrency><OfferPricingNumber>97,00</OfferPricingNumber>
						</OfferPricingFigure>
						<OfferPricingList>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Muitas Questões</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Monitorias</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Planejamento</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Grupo WhatsApp</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Zero enrolação</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Acompanhamento</ListItem>
						</OfferPricingList>
						
						<ButtonLink href="https://docs.google.com/forms/d/e/1FAIpQLSfXro0rkG8s5WmpnuDn2sYlmALA3cSjlYAtg32c6Hx13Bb9zQ/viewform?usp=sf_link" rel="noreferrer" target="_blank" light='true'>
							Fazer Inscrição Agora!
						</ButtonLink>
					</div>
					</OfferTextWrapper>
				</HalfUnicWrapper>
			</GridWrapper>
		</OfferContainer>
	);
}

export default CoursesOffer;
