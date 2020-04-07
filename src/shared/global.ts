import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { background } from "./styles";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    margin: 0;
    padding: 1%;
    
    background-color: ${background.primary};
  }  
`;
