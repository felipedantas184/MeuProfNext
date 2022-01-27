import { FaCheck } from "react-icons/fa";
import { OfferContainer, GridWrapper, HalfUnicWrapper, OfferHeading, OfferSubtitle, TextWrapper, Topline, ToplineTwo, OfferTextWrapper, ButtonScorll, ListItem, OfferPricingCurrency, OfferPricingFigure, OfferPricingInterval, OfferPricingList, OfferPricingNumber, ButtonLink, OfferPricingFigureOlder, OfferPricingNumberOlder, OfferPricingCurrencyOlder } from "../UsefulComponents";

const MentoriaOffer = () => {
	return (
		<OfferContainer id="offer" >
			<GridWrapper>
				<HalfUnicWrapper>
					<Topline>VAGAS LIMITADAS!</Topline>
					<ToplineTwo>Não perca tempo e garanta agora mesmo sua vaga!</ToplineTwo>
					
					<OfferTextWrapper>
					<div>
						<OfferHeading>MENTORIA<br/>ENEM 2022</OfferHeading>
						<OfferSubtitle>Encontre o melhor caminho e organize seus estudos de maneira eficiente para a Enem 2022!</OfferSubtitle>
					</div>
					
					<div>
						<OfferPricingFigureOlder>
							<OfferPricingCurrencyOlder>R$ </OfferPricingCurrencyOlder><OfferPricingNumberOlder>107,00</OfferPricingNumberOlder>
						</OfferPricingFigureOlder>
						<OfferPricingFigure>
							<OfferPricingCurrency>R$ </OfferPricingCurrency><OfferPricingNumber>67,00</OfferPricingNumber>
						</OfferPricingFigure>
						<OfferPricingList>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Encontros ao vivo</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Acompanhamento</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Organização</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Contato WhatsApp</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Zero enrolação</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Resultado</ListItem>
						</OfferPricingList>
						
						<ButtonLink href="https://docs.google.com/forms/d/e/1FAIpQLSdBSQoyFAp7dk_R2MC-iv9MeyDJyt9fxBlOQc1MF9si4QZ-yw/viewform?usp=sf_link" rel="noreferrer" target="_blank" light='true'>
							Fazer Inscrição Agora!
						</ButtonLink>
					</div>
					</OfferTextWrapper>
				</HalfUnicWrapper>
			</GridWrapper>
		</OfferContainer>
	);
}

export default MentoriaOffer;
