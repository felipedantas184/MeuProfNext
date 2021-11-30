import styled from "styled-components";

export const ButtonTransparent = styled.div`
    border-radius: 6px;
    background: transparent;
    color: #F0EDEE;
    white-space: nowrap;
    padding: 8px 16px;
    font-size: ${({book}) => (book ? '18px' : '16px')};
    font-weight: 600;
    outline: none;
    border: 1px solid #F0EDEE;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
    transition: all 0.5s ease-in-out;
    background: #F0EDEE;
    color: #411551;
    transform: scale(1.025);
    }
    &:not(:last-child) {
    margin-right: 16px;
    }

    @media screen and (max-width: 768px) {
        width: ${({noAdjust}) => (noAdjust ? 'auto' : '100%')};;
        padding: ${({noAdjust}) => (noAdjust ? '8px 16px' : '16px 32px')};;
        font-weight: 600;
    }
`
export const SmallButtonTransparent = styled.div`
    border-radius: 6px;
    background: transparent;
    color: #411551;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border: 1px solid #F0EDEE;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
    transition: all 0.5s ease-in-out;
    background: #F0EDEE;
    color: #411551;
    transform: scale(1.025);
    }
    &:not(:last-child) {
    margin-right: 16px;
}
`