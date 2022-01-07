import styled from "styled-components";

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	margin-bottom: 32px;
`
export const HeadingTop = styled.h2`
  font-size: 56px;
  font-family: 'Anton';
  line-height: 60px;
  color: #F6F6F6;
	font-weight: 400;

	text-align: center;
	font-style: italic;
	text-transform: uppercase;
	text-shadow: 1px 1px #A334CB;

	@media screen and (min-width: 768px) {
		font-size: 65px;
		line-height: 1.1;
	}
`
export const HeadingPrinciapl = styled.h1`
  font-size: 130px;
  font-family: 'Anton';
  line-height: 1;
  color: #FFF;
	font-weight: 400;

	text-align: center;
	font-style: italic;
	text-transform: uppercase;
	text-shadow: 2px 2px #A334CB;
	margin-left: -40px;

	@media screen and (min-width: 768px) {
		font-size: 150px;
		margin-left: -60px;
	}
`
export const Subtitle  = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
	letter-spacing: -0.5px;
  font-family: 'Josefin Sans';
  color: #F6F6F6;

	max-width: 450px;
`
export const ButtonWrapper  = styled.div`
	width: 75%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;

	@media screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`