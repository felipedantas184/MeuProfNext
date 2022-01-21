import { FaCheck } from "react-icons/fa";
import { OfferContainer, GridWrapper, HalfUnicWrapper, OfferHeading, OfferSubtitle, TextWrapper, Topline, ToplineTwo, OfferTextWrapper, ButtonScorll, ListItem, OfferPricingCurrency, OfferPricingFigure, OfferPricingInterval, OfferPricingList, OfferPricingNumber } from "../UsefulComponents";

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
						<OfferPricingFigure>
							<OfferPricingCurrency>R$ </OfferPricingCurrency><OfferPricingNumber>147,00</OfferPricingNumber>
						</OfferPricingFigure>
						<OfferPricingList>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Encontros ao vivo</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Acompanhamento</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Organização</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Contato WhatsApp</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Zero enrolação</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Resultado</ListItem>
						</OfferPricingList>
						
						<ButtonScorll to='teachers' light='true'
							smooth={true} duration={500} spy={true} exact='true' offset={-20}>
							Fazer Inscrição Agora!
						</ButtonScorll>
					</div>
					</OfferTextWrapper>
				</HalfUnicWrapper>
			</GridWrapper>
		</OfferContainer>
	);
}

export default MentoriaOffer;
