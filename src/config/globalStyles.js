// @flow
import { createGlobalStyle } from 'styled-components';

// Global styles but theme- and update-able!
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-color: ${(props: string) => props.theme.palette.primary.main};
    color: ${(props: string) => props.theme.palette.primary.main};
    font-family: ${(props: string) => props.theme.font.primaryFallback};
    font-size: ${(props: string) => props.theme.font.sizes.medium}px;
    font-weight: 400;
    height: 100%;
    margin: 0;

    button,
    input,
    select,
    textarea {
      font-family: ${(props: string) => props.theme.font.primaryFallback};
    }

    &.fonts-loaded {
      font-family: ${(props: string) => props.theme.font.primary};

      button,
      input,
      select,
      textarea {
        font-family: ${(props: string) => props.theme.font.primary};
      }
    }
  }
`;

export default GlobalStyle;
