import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;

    a {
      text-decoration: none;
    }
  }

  html,
  body {
    font-family: Roboto;
    font-size: 10px;
  }

  body {
    padding-left: 18.8vw;
    padding-right: 18.8vw;
  }
`;

export default GlobalStyle;
