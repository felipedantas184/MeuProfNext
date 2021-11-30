import styled from "styled-components"; 

export const HighlightsContainer = styled.section`
	background: #411551;
  color: #13131A;
	font-family: 'Josefin Sans';

  border-radius: 50px 0 50px 0;
`
export const HighlightsWrapper = styled.div`
	max-width: 1100px;
	height: auto;
	margin-left: auto;
	margin-right: auto;
  padding: 75px 24px;
`
export const HighlightsHeading = styled.h1`
  margin-bottom: 48px;
  font-size: 48px;
  line-height: 1.3;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`
export const HighlightsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  width: 100%;

  
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`
export const HighlightsColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const HighlightsColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: 24px;
  }
`
export const TextWrapper = styled.div`
	position: relative;
  width: 100%; 
	background: #521b66;

	padding: 30px 15px 15px 30px;
	border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.45) 1.95px 1.95px 2.6px;
  transition: all 0.5s ease-in-out;

	&:after {
		content: ${({first}) => (first ? '"01"' : '"02"')};
		position: absolute;
		top: 15px;
		right: 15px;
		color: #E1E2E3;
		font-size: 40px;
		font-family: "Josefin Sans";
		opacity: 0.7;
	}
	&:hover {
  transition: all 0.5s ease-in-out;
  transform: scale(1.025);
}
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.3;
  text-transform: uppercase;
  color: #FFF;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 1.3;
  font-family: 'Josefin Sans';
  color: #F6F6F6;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`


export const ImgWrap = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    height: 80%;
  }
`;



export const ServicesRow = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const ServicesCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 300px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
  transition: all 0.2s ease-in-out;

  color: #E1E2E3;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

`
export const ServicesH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`