import { createGlobalStyle } from "styled-components";
import { thems } from "./Thems";
import { font } from "./Common";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
      ${font({
        color: `${thems.colors.text.title}`,
        Fmax: 60,
        Fmin: 45,
      })};
  }

  h2 {
    ${font({
      color: `${thems.colors.text.title}`,
      weight: 800,
      Fmax: 50,
      Fmin: 65,
    })};
  }

  a {
    cursor: pointer;
    text-decoration: none;
    ${font({
      color: `${thems.colors.text.title}`,
      weight: 400,
      Fmax: 16,
      Fmin: 14,
    })};
  }

  input {
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
  }

  textarea {
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: transparent;
    cursor: pointer;
  }

  section {
    padding: 150px 0;
  }

  section:nth-of-type(odd) {
    background-color: ${thems.colors.background.primary};
  }

  section:nth-of-type(even) {
    background-color: ${thems.colors.background.second};
  }
`;
