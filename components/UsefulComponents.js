import { Link as LinkS } from "react-scroll";
import Link from 'next/link'
import styled from "styled-components";

export const Container = styled.section`
	background: #411551;
	background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(65,21,81,1) 75%);
	/**
	background-size: 500% auto;
	animation: gradient 10s linear infinite;
	background-position: 0% 0%;
	 */

	color: #FFF;
	font-family: 'Josefin Sans';
  margin-top: 0;

	border-bottom-right-radius: 150px;

	/**
	@keyframes gradient {
	 0% {
		 background-position: 0 0;
	}
	50% {
		background-position: 100% 0;
	}
	 100% {
		 background-position: 0% 0;
	}
	}
 */

	@media screen and (max-width: 768px) {
    border-bottom-right-radius: 50px;
  }
`
export const HeroContainer = styled.section`
	background: #411551;
	background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(65,21,81,1) 75%);
	
	color: #FFF;
	font-family: 'Josefin Sans';
  margin-top: -60px;

	border-bottom-right-radius: 150px;

	@media screen and (max-width: 768px) {
    border-bottom-right-radius: 50px;
  }
`
export const GridWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 100vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 16px 75px 16px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 24px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`
export const HalfWrapper = styled.div`
	flex: 1;
	height: auto;

	display: flex;
	flex-direction: column;
	justify-content: ${({end, start}) => (end ? 'flex-end' : start ? 'flex-start' : 'center')};
	align-items: center;

	position: relative;

	@media screen and (min-width: 768px) {
		justify-content: center;
	}
`
export const TextWrapper = styled.div`
  width: 100%;

	display: flex;
	flex-direction: column;
	gap: 16px;

	margin-bottom: 32px;
`
export const Heading = styled.span`
  font-size: 56px;
  font-family: 'Anton';
  line-height: 60px;
  color: #FFF;

	@media screen and (min-width: 768px) {
		font-size: 65px;
		line-height: 1.1;
	}
`
export const Subtitle  = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
	letter-spacing: -0.5px;
  font-family: 'Josefin Sans';
  color: #F6F6F6;
`
export const ButtonWrapper  = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`
export const ButtonInternalLink = styled.button`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	
	padding: 14px 20px;
	background-color: ${({dark, light}) => (dark ? '#000' : light ? '#FFF' : '#CCC')};
	color: ${({dark, light}) => (dark ? '#FFF' : light ? '#000' : '#13131A')};

	font-family: 'Anton';
	font-size: 18px;
	text-transform: uppercase;

	border-radius: 6px;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	box-shadow: rgba(240, 46, 170, 0.2) -5px 5px;

	text-decoration: none;

	&:hover {
		box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
	}

	@media screen and (min-width: 768px) {
		max-width: 350px;
		margin-left: auto;
		margin-right: auto;
	}
`
export const ButtonLink = styled.a`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	
	padding: 14px 20px;
	background-color: ${({dark, light}) => (dark ? '#000' : light ? '#FFF' : '#CCC')};
	color: ${({dark, light}) => (dark ? '#FFF' : light ? '#000' : '#13131A')};

	font-family: 'Anton';
	font-size: 18px;
	text-transform: uppercase;

	border-radius: 6px;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	box-shadow: rgba(240, 46, 170, 0.2) -5px 5px;

	text-decoration: none;

	&:hover {
		box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
	}

	@media screen and (min-width: 768px) {
		max-width: 350px;
		margin-left: auto;
		margin-right: auto;
	}
`
export const ButtonScorll = styled(LinkS)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	
	padding: 14px 20px;
	background-color: ${({dark, light}) => (dark ? '#000' : light ? '#FFF' : '#CCC')};
	color: ${({dark, light}) => (dark ? '#FFF' : light ? '#000' : '#13131A')};

	font-family: 'Anton';
	font-size: 18px;
	text-transform: uppercase;

	border-radius: 6px;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	box-shadow: rgba(240, 46, 170, 0.2) -5px 5px;


	&:hover {
		box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
	}

	@media screen and (min-width: 768px) {
		max-width: 350px;
		margin-left: auto;
		margin-right: auto;
	}
`
export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	width: 250px;
	height: 250px;

	@media screen and (min-width: 768px) {
		width: 450px;
		height: 450px;
	}
`
export const LogoImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	width: 100px;
	height: 100px;
	margin-bottom: 32px;

	@media screen and (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
`
export const HalfUnicWrapper = styled.div`
	flex: 1;
	height: auto;
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	justify-content: ${({end, start}) => (end ? 'flex-end' : start ? 'flex-start' : 'center')};
	align-items: center;

	position: relative;

	@media screen and (min-width: 768px) {
		justify-content: center;
	}
`