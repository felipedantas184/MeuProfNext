import styled from "styled-components";

export const ButtonPurple = styled.div`
    display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	
	padding: 16px 32px;
	background: #411551;
    color: #F1F2F3;
	border: 1px solid #F0EDEE;

	font-family: 'Josefin Sans';
	font-size: 16px;
    font-weight: 600;

	white-space: nowrap;
	border-radius: 6px;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	text-decoration: none;
    outline: none;
    border: ${({border}) => (border ? '1px solid #F0EDEE' : 'none')};
    
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;

    &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.025);
    }
`

export const SmallButtonPurple = styled.div`
    border-radius: 6px;
    background: #A334CB;
    color: #F1F2F3;
    border: ${({border}) => (border ? '1px solid #F0EDEE' : 'none')};
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;


    &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.025);
    }
    &:not(:last-child) {
    margin-right: 16px;
}
`