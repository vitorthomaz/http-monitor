import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";

import { background, color } from "./shared/styles";
import { GlobalStyle } from "./shared/global";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ background, color }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
