import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(167.96deg, #8257E5 0%, #271A45 100%);
    height: 100vh
}
`;

export const travelLabelColor = 'rgba(0, 0, 0, 0.64)';
export const travelValueColor = 'rgba(0, 0, 0, 0.88)';