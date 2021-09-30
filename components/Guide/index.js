import { Button } from "../ButtonElement";
import Image from 'next/image'
import { ButtonTransparent } from "../ButtonTransparentElement";
import { Link as LinkS } from "react-scroll";
import { BtnWrap, Heading, GuideColumn1, GuideColumn2, GuideContainer, GuideRow, GuideWrapper, Subtitle, TextWrapper, Number, ImgWrap, TextBigWrapper } from "./GuideStyles";

const Guide = ({number, title, description, lightBg, first, video}) => {
	return ( 
		<GuideContainer lightBg={lightBg} first={first} >
			<GuideWrapper first={first} >
				<GuideRow>
					<GuideColumn1>
						<TextBigWrapper>
							<Number lightBg={lightBg} >{number}</Number>
								<TextWrapper>
									<Heading lightBg={lightBg} >{title}</Heading>
									<Subtitle lightBg={lightBg} >{description}</Subtitle>
								</TextWrapper>
						</TextBigWrapper>
					</GuideColumn1>
					<GuideColumn2>
						<ImgWrap>
							<video  autoPlay loop muted src={video} type="video/mp4" style={{ maxWidth: 250, borderRadius: 20, border: '0.5px solid #E1E2E3 ' }} />
						</ImgWrap>
					</GuideColumn2>
				</GuideRow>
			</GuideWrapper>
		</GuideContainer>
		);
}
 
export default Guide;