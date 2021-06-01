import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      purple: string;
      gray_01: string;
      gray_02: string;
      white: string;
      black: string;
    };
  }
}
