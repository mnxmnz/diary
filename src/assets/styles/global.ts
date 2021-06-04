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
    font-family: 'Cafe24SsurroundAir';
    font-size: 10px;
  }

  body {
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
