import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

// Global styles but theme- and update-able!
const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html,
  body {
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
