import { Button } from "../ButtonElement";
import { FaCheck } from 'react-icons/fa'
import { PricesList } from "./PricingData";
import { BtnWrap, HighlightBlock, ListItem, PricingCard, PricingContainer, PricingCurrency, PricingFigure, PricingH3, PricingInterval, PricingList, PricingNumber, PricingRow, PricingSpan, PricingTitle, PricingWrapper } from "./PricingStyles";

const Pricing = () => {
	return ( 
		<PricingContainer id="pricing">
			<PricingWrapper>
				<PricingTitle>Preços</PricingTitle>
				<PricingRow>
					{PricesList.map((price) => {
						return(
							<PricingCard key={price.id} yellow={price.pricipal} >
								<PricingH3>{price.title}<br/><PricingSpan>{price.subtitle}</PricingSpan></PricingH3>
								<PricingFigure>
									<PricingCurrency>R$</PricingCurrency><PricingNumber>{price.value}</PricingNumber><PricingInterval>/{price.interval}</PricingInterval>
								</PricingFigure>
								<PricingList>
									<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>{price.item1}</ListItem>
									<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>{price.item2}</ListItem>
									<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>{price.item3}</ListItem>
								</PricingList>
								<BtnWrap href={price.link} target="blank" >
										<Button>Quero Esse</Button>
								</BtnWrap>
							</PricingCard>
						)
					})}
				</PricingRow>
			</PricingWrapper>
		</PricingContainer>
		);
}
 
export default Pricing;