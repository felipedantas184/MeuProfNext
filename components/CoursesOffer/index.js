import { FaCheck } from "react-icons/fa";
import { OfferContainer, GridWrapper, HalfUnicWrapper, OfferHeading, OfferSubtitle, TextWrapper, Topline, ToplineTwo, OfferTextWrapper, ButtonScorll, ListItem, OfferPricingCurrency, OfferPricingFigure, OfferPricingInterval, OfferPricingList, OfferPricingNumber } from "../UsefulComponents";

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

export default CoursesOffer;
