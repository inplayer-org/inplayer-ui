import { createGlobalStyle } from 'styled-components';

// Global styles but theme- and update-able!
const GlobalStyle = createGlobalStyle`
  html,
  body {
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
