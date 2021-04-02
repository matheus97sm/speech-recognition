import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f0f0;
    --lightGrey: #b0b0b0;
    --grey: #444;
    --green: #04D9C4;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--grey);
  }
`;
