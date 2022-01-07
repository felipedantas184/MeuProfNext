import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { PerksList } from "./PerksData";
import Image from 'next/image'
import { BtnWrap, PerksCard, PerksContainer, PerksH2, PerksP, PerksRow, PerksTitle, PerksWrapper } from "./PerksStyles";
import { Button } from "../ButtonElement";
import { ButtonPurple } from "../ButtonPurple";
import { Link as LinkS } from "react-scroll";
import { ButtonScorll } from "../UsefulComponents";

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
				<ButtonScorll to='teachers' dark='true' style={{marginTop: 48}}
					smooth={true} duration={500} spy={true} exact='true' offset={-20}>
					<BsChevronDoubleUp size={16} color="#F1F2F3" style={{marginRight: 16}} />
					Conheça os Professores
					<BsChevronDoubleUp size={16} color="#F1F2F3" style={{marginLeft: 16}} />
				</ButtonScorll>
			</PerksWrapper>
		</PerksContainer>
	 );
}
 
export default Perks;