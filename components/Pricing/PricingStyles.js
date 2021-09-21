import styled from "styled-components"; 

export const PricingContainer = styled.section`
	background: #A334CB;
  color: #13131A;
	font-family: 'Josefin Sans';
`
export const PricingWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 90vh;
	margin-left: auto;
	margin-right: auto;
	padding: 75px 24px;

  display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const PricingRow = styled.div`
	display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
`
export const PricingTitle = styled.h2`
  margin-bottom: 48px;
  font-size: 48px;
  line-height: 1.3;
  color: #fff;
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`
export const PricingCard = styled.div`
  background: ${({yellow, green, blue}) => (yellow ?  '#411551' : green ? "#521b66" : blue ? '#1c1551' : "#521b66")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  flex: 1;
  min-width: 275px;
  max-width: 300px;
  height: 400px;
  padding:  24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  transform: scale(${({highlight}) => (highlight ? "1.025" : "1.0")});
  text-align: center;
	color: #FFF;


  &:hover {
    transform: scale(${({highlight}) => (highlight ? "1.075" : "1.05")});
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`
export const PricingH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const HighlightBlock = styled.div`
  width: 100%;

  padding: 4px 8px;
  background: #FFF;
  position: absolute;
  margin-top: -30px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  color: #000;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PricingH3 = styled.h3`
  font-size: 20px;
  font-weight: 800;
  margin: 0;
  min-height: 60px;
`
export const PricingSpan = styled.span`
  font-size: 14px;
  text-align: center;
  font-weight: normal;
  display: inline-block;
  line-height: 3;
`
export const PricingFigure = styled.div`
  font-size: 60px;
  margin-bottom: 15px;
`
export const PricingCurrency = styled.span`
  vertical-align: super;
	font-size: 26px;
	-webkit-opacity: 0.6;
	-moz-opacity: 0.6;
	opacity: 0.6;
`
export const PricingNumber = styled.span`
  font-weight: 500;
`
export const PricingInterval = styled.span`
  font-weight: 400;
  font-size: 16px;
  opacity: 0.8;
`
export const PricingList = styled.ul`
  list-style: none;
`
export const ListItem = styled.li`
	margin-bottom: 12px;
`
export const BtnWrap = styled.a`
  display:flex;
  justify-content: center;
  width: 75%;

  text-decoration: none;
`;
