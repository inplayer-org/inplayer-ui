import { createGlobalStyle } from 'styled-components';

// Global styles but theme- and update-able!
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;

    body {
      color: ${(props) => props.theme.palette.text.main};
      font-size: ${(props) => props.theme.font.sizes.medium}px;
      height: 100%;
      margin: 0;
    }

    body,
    input,
    textarea,
    select,
    button {
      font-family: ${(props) => props.theme.font.primaryFallback};
      font-weight: 300;
    }

    &.wf-active {
      body,
      input,
      textarea,
      select,
      button {
        font-family: ${(props) => props.theme.font.primary};
      }

      body,
      input,
      textarea,
      select {
        font-weight: 300;
      }
    }
  }
`;

export default GlobalStyle;
