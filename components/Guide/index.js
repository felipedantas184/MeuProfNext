import { Button, ButtonStart } from "../ButtonElement";
import Image from 'next/image'
import { ButtonTransparent } from "../ButtonTransparentElement";
import { Link as LinkS } from "react-scroll";
import { BtnWrap, Heading, GuideColumn1, GuideColumn2, GuideContainer, GuideRow, GuideWrapper, Subtitle, TextWrapper, Number, ImgWrap, TextBigWrapper, ExtLink } from "./GuideStyles";

const Guide = ({number, title, description, lightBg, first, video, buttonLabel, photo, image, link}) => {
	return ( 
		<GuideContainer lightBg={lightBg} first={first} id="start" >
			<GuideWrapper first={first} >
				<GuideRow>
					<GuideColumn1>
						<TextBigWrapper>
							<Number lightBg={lightBg} >{number}</Number>
								<TextWrapper>
									<Heading lightBg={lightBg} >{title}</Heading>
									<Subtitle lightBg={lightBg} >{description}</Subtitle>
									<ExtLink href={link} target="blank" passHref >
										<ButtonStart medium>{buttonLabel}</ButtonStart>
									</ExtLink>
								</TextWrapper>
						</TextBigWrapper>
					</GuideColumn1>
					<GuideColumn2>
						<ImgWrap>
							<video  autoPlay loop muted src={video} type="video/mp4" style={{ maxWidth: 250, borderRadius: 20, border: '0.5px solid #E1E2E3', display: photo ? 'none' : 'block'}} />
							<div style={{position: 'relative', width: 300, height: 300, overflow: 'hidden',borderRadius: 20, border: '0.5px solid #E1E2E3', display: photo ? 'block' : 'none'}}>
							<Image src={image} layout="fill" />
							</div>
						</ImgWrap>
					</GuideColumn2>
				</GuideRow>
			</GuideWrapper>
		</GuideContainer>
		);
}
 
export default Guide;