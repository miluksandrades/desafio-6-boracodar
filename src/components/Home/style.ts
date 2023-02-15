import styled from "styled-components";

export const Container = styled.div`
    max-width: 327px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px
`;

export const Title = styled.h3`
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    color: #FFFFFF;
`;

export const Alert = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    opacity: 0.64;
`