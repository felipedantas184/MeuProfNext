import styled from "styled-components";

export const ButtonPurple = styled.div`
    border-radius: 6px;
    background: #A334CB;
    color: #F1F2F3;
    white-space: nowrap;
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border: ${({border}) => (border ? '1px solid #F0EDEE' : 'none')};
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
    
    @media screen and (max-width: 768px) {
	width: 100%;
    padding: 16px 32px;
    font-weight: 600;
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