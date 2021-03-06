import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #333;
  }
  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p, a, button {
    font-weight: 200;
  }
`;