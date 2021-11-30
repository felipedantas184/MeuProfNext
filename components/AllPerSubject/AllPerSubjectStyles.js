import styled from "styled-components"; 

export const AllPerSubjectContainer = styled.section`
  background: #411551;
	color: #F0EDEE;
	font-family: 'Josefin Sans';

  margin-top: -60px;
`
export const AllPerSubjectWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 10vh;
	margin-left: auto;
	margin-right: auto;
  padding: 75px 24px 0px 24px;

	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const AllPerSubjectRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
  margin: 24px 0;

  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
    margin: 24px 0;
  }
`
export const AllPerSubjectColumn1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    padding: 0;
    max-width: 50%;
  }

  @media screen and (max-width: 480px) {
    max-width: 75%;
  }
`
export const AllPerSubjectColumn2 = styled.div`
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
  color: #E6E6E6;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`
export const HeadingGlow = styled.span`
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







export const AllTeachersContainer = styled.section`
  background: #FFF;
  color: #13131A;
	font-family: 'Josefin Sans';
`
export const AllTeachersWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 95vh;
	margin-left: auto;
	margin-right: auto;
  padding: 24px 24px 50px 24px;

	display: flex;
  flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`
export const AllTeachersRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 0;

  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0px;
  }
`
export const BtnWrapTwo = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 32px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;