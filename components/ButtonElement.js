import styled from "styled-components";

export const Button = styled.div`
    border-radius: 6px;
    background: ${({transparent}) => (transparent ? 'transparent' : '#F0EDEE')};
    color: #023047;
    white-space: nowrap;
    padding: ${({big, medium}) => (big ? '16px 24px' : medium ? '12px 16px' : '8px 16px')};
    font-size: ${({big}) => (big ? '18px' : '16px')};
    font-weight: 600;
    outline: none;
    border: ${({border}) => (border ? '1px solid #A334CB' : 'none')};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    box-shadow: ${({shadow}) => (shadow ? 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px' : 'none')};

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

export const SmallButton = styled.div`
    border-radius: 6px;
    background: #A334CB;
    color: #F1F2F3;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border: none;
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