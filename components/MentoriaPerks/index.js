import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { MentoriaPerksList } from "./MentoriaPerksData";
import Image from 'next/image'
import { BtnWrap, MentoriaPerksCard, MentoriaPerksContainer, MentoriaPerksH2, MentoriaPerksP, MentoriaPerksRow, MentoriaPerksTitle, MentoriaPerksWrapper } from "./MentoriaPerksStyles";
import { Button } from "../ButtonElement";
import { ButtonPurple } from "../ButtonPurple";
import { Link as LinkS } from "react-scroll";
import { ButtonScorll } from "../UsefulComponents";

const MentoriaPerks = () => {
	return ( 
		<MentoriaPerksContainer id="start">
			<MentoriaPerksWrapper>
				<MentoriaPerksTitle>Vantagens</MentoriaPerksTitle>
				<MentoriaPerksRow>
					{MentoriaPerksList.map((perk) => {
						return (
							<MentoriaPerksCard key={perk.id} >
								{perk.icon}
								<MentoriaPerksH2>{perk.title}</MentoriaPerksH2>
								<MentoriaPerksP>{perk.description}</MentoriaPerksP> 
							</MentoriaPerksCard>
						)
					})}
				</MentoriaPerksRow>
				<ButtonScorll to='offer' dark='true' style={{marginTop: 48}}
					smooth={true} duration={500} spy={true} exact='true' offset={20}>
					<BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginRight: 16}} />
					Quero Participar
					<BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginLeft: 16}} />
				</ButtonScorll>
			</MentoriaPerksWrapper>
		</MentoriaPerksContainer>
	 );
}
 
export default MentoriaPerks;