import styled from "styled-components"; 

export const CoursesAboutContainer = styled.section`
	background: #411551;
	background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(65,21,81,1) 125%);


	font-family: 'Josefin Sans';

  border-radius: 50px 0 0 0;
`
export const CoursesAboutWrapper = styled.div`
	max-width: 1100px;
	height: auto;
	margin-left: auto;
	margin-right: auto;
  padding: 75px 16px;
`
export const CoursesAboutHeading = styled.h1`
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
export const CoursesAboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';
  grid-template-areas: ${({ invert }) => (invert ? '"col1 col2"' : '"col2 col1"')};;

  width: 100%;

  
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`
export const CoursesAboutColumn1 = styled.div`
  padding: 0 15px;
  grid-area: col1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 48px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const CoursesAboutColumn2 = styled.div`
  padding: 0 15px;
  grid-area: col2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 48px;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: 24px;
  }
`
export const TextWrapper = styled.div`
	position: relative;
  width: 100%;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.3;
  text-transform: uppercase;
  color: #FFF;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 20px;
  line-height: 1.2;
  font-family: 'Josefin Sans';
  color: #F6F6F6;

  @media screen and (max-width: 768px) {
    font-size: 18px;
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

export const ProfilePicWrap = styled.div`
  position: relative;
  width: 350px;
  height: 350px;

  display: flex;
  justify-content: center;
  align-items: center;

	border-radius: 50px;
	overflow: hidden;
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px;
  transition: all 0.5s ease-in-out;
  
  &:hover {
		box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
	}

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    
    margin-bottom: 32px;
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