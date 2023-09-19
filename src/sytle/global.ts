import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Helvetica Neue', 'Helvetica', 'Roboto';
    font-weight: bold;
    color: ${colors.white}
  }

  body {
    background: ${colors.black};
  }

  button {
    cursor: pointer;
  }

  #root {
    width: 100%;
    height: 100vh;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
