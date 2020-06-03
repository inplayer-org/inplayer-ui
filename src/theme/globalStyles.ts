import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
   ${normalize()}

   html {
    height: 100%;

    * {
      box-sizing: border-box;
    }

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
      font-family: ${(props) => props.theme.font.primary};
      font-weight: 300;
    }

    &.wf-active {
      body,
      input,
      textarea,
      select {
        font-family: ${(props) => props.theme.font.primary};
        font-weight: 300;
      }
    }
  }
`;

export default GlobalStyle;
