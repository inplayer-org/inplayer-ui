// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        main: string;
        light?: string;
        dark?: string;
      };
      secondary: {
        main: string;
        light?: string;
        dark?: string;
      };
      text: {
        main: string;
        light?: string;
        disabled?: string;
      };
    };
    dimensions: {
      baseGrid: number;
      borderRadius: string;
    };
    font: {
      primary: string;
      primaryFallback: string;
      weights: {
        thin?: number;
        light?: number;
        normal?: number;
        semiBold?: number;
        bold?: number;
      };
      sizes: {
        extraSmall: string;
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
    };
  }
}
