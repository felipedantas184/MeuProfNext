import styled from "styled-components"; 

export const DetailsContainer = styled.section`
  background: #411551;
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(65,21,81,1) 75%);

	color: #F0EDEE;
	font-family: 'Josefin Sans';

  margin-top: -60px;
`
export const DetailsWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 95vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 24px 75px 24px;

	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const DetailsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
  margin: 64px 0;

  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
    margin: 24px 0;
  }
`
export const DetailsColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const DetailsColumn2 = styled.div`
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
export const TextWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const Heading = styled.h1`
  margin-bottom: 8px;
  font-size: 44px;
  line-height: 1.3;
  text-transform: uppercase;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`
export const Subtitle  = styled.p`
  max-width: 500px;
  margin-bottom: 36px;
  font-size: 20px;
  line-height: 1.3;
  font-family: 'Josefin Sans';
  color: #F6F6F6;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const Classes  = styled.p`
  max-width: 500px;
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 1.3;
  font-family: 'Josefin Sans';
  color: #F6F6F6;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const BtnWrap = styled.div`
  width: auto;
  position: relative;

  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 16px;
  
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;
export const SbjWrap = styled.div`
  display:flex;
  flex-wrap: wrap;
  row-gap: 8px;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 32px;
`;
export const ImgWrap = styled.div`
  max-width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
	border-radius: 50px;
	overflow: hidden;
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px;
  
  @media screen and (max-width: 768px) {
    max-width: 200px;
    height: 200px;
    margin-bottom: 32px;
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