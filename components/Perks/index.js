import { BsChevronDoubleDown } from "react-icons/bs";
import { PerksList } from "./PerksData";
import Image from 'next/image'
import { BtnWrap, PerksCard, PerksContainer, PerksH2, PerksP, PerksRow, PerksTitle, PerksWrapper } from "./PerksStyles";
import { Button } from "../ButtonElement";
import { ButtonPurple } from "../ButtonPurple";
import { Link as LinkS } from "react-scroll";

const Perks = () => {
	return ( 
		<PerksContainer id="perks">
			<PerksWrapper>
				<PerksTitle>Vantagens</PerksTitle>
				<PerksRow>
					{PerksList.map((perk) => {
						return (
							<PerksCard key={perk.id} >
								{perk.icon}
								<PerksH2>{perk.title}</PerksH2>
								<PerksP>{perk.description}</PerksP> 
							</PerksCard>
						)
					})}
				</PerksRow>
				<BtnWrap>
					<LinkS to='pricing'
            smooth={true} duration={500} spy={true} exact='true' offset={-60}>
					<ButtonPurple><BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginRight: 16}} />Confira Nossos Planos<BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginLeft: 16}} /></ButtonPurple>
					</LinkS>
				</BtnWrap>
			</PerksWrapper>
		</PerksContainer>
	 );
}
 
export default Perks;