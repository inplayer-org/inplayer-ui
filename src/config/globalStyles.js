import { createGlobalStyle } from 'styled-components';

// Global styles but theme- and update-able!
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;

    body {
      color: ${props => props.theme.palette.text.main};
      font-family: ${props => props.theme.font.primaryFallback};
      font-size: ${props => props.theme.font.sizes.medium}px;
      font-weight: 400;
      height: 100%;
      margin: 0;

      button,
      input,
      select,
      textarea {
        font-family: ${props => props.theme.font.primaryFallback};
      }
    }

    &.wf-active {
      font-family: ${props => props.theme.font.primary};
      font-weight: 300;

      button,
      input,
      select,
      textarea {
        font-family: ${props => props.theme.font.primary};
        font-weight: 300;
      }
    }
  }
`;

export default GlobalStyle;
