import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { CoursesPerksList } from "./CoursesPerksData";
import Image from 'next/image'
import { BtnWrap, CoursesPerksCard, CoursesPerksContainer, CoursesPerksH2, CoursesPerksP, CoursesPerksRow, CoursesPerksTitle, CoursesPerksWrapper } from "./CoursesPerksStyles";
import { Button } from "../ButtonElement";
import { ButtonPurple } from "../ButtonPurple";
import { Link as LinkS } from "react-scroll";
import { ButtonScorll } from "../UsefulComponents";

const CoursesPerks = () => {
	return ( 
		<CoursesPerksContainer id="start">
			<CoursesPerksWrapper>
				<CoursesPerksTitle>Vantagens</CoursesPerksTitle>
				<CoursesPerksRow>
					{CoursesPerksList.map((perk) => {
						return (
							<CoursesPerksCard key={perk.id} >
								{perk.icon}
								<CoursesPerksH2>{perk.title}</CoursesPerksH2>
								<CoursesPerksP>{perk.description}</CoursesPerksP> 
							</CoursesPerksCard>
						)
					})}
				</CoursesPerksRow>
				<ButtonScorll to='offer' dark='true' style={{marginTop: 48}}
					smooth={true} duration={500} spy={true} exact='true' offset={20}>
					<BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginRight: 16}} />
					Quero Participar
					<BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginLeft: 16}} />
				</ButtonScorll>
			</CoursesPerksWrapper>
		</CoursesPerksContainer>
	 );
}
 
export default CoursesPerks;