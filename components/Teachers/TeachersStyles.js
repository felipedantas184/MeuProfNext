import { FaSpinner } from "react-icons/fa";
import styled from "styled-components"; 

export const TeachersContainer = styled.section`
	background: #FFF;
  color: #13131A;
	font-family: 'Josefin Sans';

  border-radius: 0 0 150px 0;
`
export const TeachersWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 90vh;
	margin-left: auto;
	margin-right: auto;
  padding: 75px 16px;

	display: flex;
	justify-content: center;
	align-items: center;
`
export const TeachersRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`
export const TeachersColumn1 = styled.div`
  margin-bottom: 15px;
  grid-area: col1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TeachersColumn2 = styled.div`
  grid-area: col2;
  padding: 15px;

  display: grid;
  grid-template-columns: 1fr;

  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 0 0 15px 0;
  }
`
export const TextWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.3;
  text-transform: uppercase;
  color: #0A090C;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 1.25;
  font-family: 'Josefin Sans';
  color: #33333A;
  letter-spacing: -0.5px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Warning  = styled.p`
  max-width: 440px;
  font-size: 20px;
  line-height: 1.3;
  font-family: 'Josefin Sans';
  color: #33333A;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const SubjectWpr  = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;

  max-width: 440px;
  justify-content: space-around;
  gap: 16px;

  input {
    display: none;
  }
  
  input[type=radio]:checked ~ .block {
  background-color: #13131a;
  }

  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  @media screen and (max-width: 400px) {
    gap: 4px;
  }
`
export const SubjectBlock  = styled.label`
  background: #521B66;
  max-width: 125px;
  max-height: 100px;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.5s ease-in-out;
  -webkit-tap-highlight-color: transparent;

  &:hover {
  transition: all 0.5s ease-in-out;
  transform: scale(1.1);
  background-color: #521B66;
  }
`
export const SubjectName  = styled.span`
  font-family: 'Josefin Sans';
  color: white;
  font-size: 16px;

  margin-top: 16px;
`
export const BtnWrap = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
`;
export const TeachersCard = styled.div`
  max-width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;

  border: 1px solid #C4C4C4;
  border-radius: 10px;
  gap: 24px;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.5s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 16px;  
  }
`
export const TeachersImg = styled.div`
  max-width: 115px;
  max-height: 115px;
  border-radius: 20px;
  overflow: hidden;
  align-self: flex-start;
`
export const TeachersTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
`
export const TeachersName = styled.h3`
  font-family: 'Josefin Sans';
  color: #0A090C;
  font-size: 18px;
  margin-bottom: 4px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
` 
export const TeachersSubject = styled.span`
  font-family: 'Josefin Sans';
  color: #0A090C;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
` 
export const TeachersDescription = styled.p`
  font-family: 'Josefin Sans';
  color: #13131A;
  font-size: 16px;

  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
` 
export const TeachersBar = styled.p`
  max-width: 225px;
  height: 1px;
  background-color: gray;
  margin: 4px 0 8px 0;
` 
export const ExtLink = styled.a`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
    margin-right: 12px;
  }
  }
`

export const Spinner = styled(FaSpinner)`
  animation: spin 2s linear infinite;;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(225deg); }
    100% { transform: rotate(360deg); }
  }
`