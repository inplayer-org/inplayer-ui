import { createGlobalStyle } from 'styled-components';

import ipicEot from 'assets/fonts/ipic18.eot';
import ipicTtf from 'assets/fonts/ipic18.ttf';
import ipicWoff from 'assets/fonts/ipic18.woff';
import ipicSvg from 'assets/fonts/ipic18.svg';

// Global styles but theme- and update-able!
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ipic';
    src: url(${ipicEot});
    src: url(${ipicEot}) format('embedded-opentype'),
      url(${ipicTtf}) format('truetype'),
      url(${ipicWoff}) format('woff'),
      url(${ipicSvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }

  html {
    height: 100%;

    body {
      color: ${props => props.theme.palette.text.main};
      font-size: ${props => props.theme.font.sizes.medium}px;
      height: 100%;
      margin: 0;
    }

    body,
    input,
    textarea,
    select,
    button {
      font-family: ${props => props.theme.font.primaryFallback};
      font-weight: 300;
    }

    &.wf-active {
      body,
      input,
      textarea,
      select {
        font-family: ${props => props.theme.font.primary};
        font-weight: 300;
      }
    }
  }
`;

export default GlobalStyle;
