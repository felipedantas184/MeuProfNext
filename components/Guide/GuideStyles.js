import styled from "styled-components"; 

export const GuideContainer = styled.section`
  background: ${({lightBg}) => (lightBg ? '#FFF' : '#411551')};
	color: ${({lightBg}) => (lightBg ? '#13131A' : '#F0EDEE')};
	font-family: 'Josefin Sans';

  margin-top: ${({first}) => (first ? '-60px' : '0')};

  @media screen and (max-width: 768px) {
    border-bottom-right-radius: 50px;
  }
`
export const GuideWrapper = styled.div`
	max-width: 1100px;
	height: auto;
	margin-left: auto;
	margin-right: auto;
  padding: ${({first}) => (first ? '150px 24px 50px 24px' : '120px 24px 50px 24px')};

	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		padding-top: 100px;
	}
`
export const GuideRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  grid-template-areas: 'col1 col2';

  width: 100%;

  @media screen and (max-width: 768px) {
		grid-template-columns: auto;
		grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1' 'col2';
  }
`
export const GuideColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const GuideColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const TextBigWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 24px; 
	justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
		flex-direction: column;
		padding: 0 15px;
  }
`
export const TextWrapper = styled.div`
  width: 100%;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const Heading = styled.h1`
  max-width: 440px;
  margin-bottom: 16px;
  font-size: 44px;
  line-height: 1.3;
  text-transform: uppercase;
	color: ${({lightBg}) => (lightBg ? '#411551' : '#FFF')};

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
		margin-top: -16px;
  }
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 1.3;
  font-family: 'Josefin Sans';
	color: ${({lightBg}) => (lightBg ? '#411551' : '#F0EDEE')};

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const Number  = styled.span`
  line-height: 1.3;
  font-family: 'Josefin Sans';
	color: ${({lightBg}) => (lightBg ? '#411551' : '#F0EDEE')};
  transform: translate(-20%, -20%);
  font-size: 90px;
	letter-spacing:0.1em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: ${({lightBg}) => (lightBg ? '#411551' : '#F0EDEE')};
  text-shadow: ${({lightBg}) => (lightBg ? '10px 10px #B4B4B4' : '10px 10px #411551')};;

  @media screen and (max-width: 768px) {
    font-size: 60px;
		margin-left: 16px;
  }
`

export const ImgWrap = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    height: 80%;
  }
`;

export const ExtLink = styled.a`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
    margin-right: 0px;
  }
  }
`