import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
// Material add dark theme default
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: '#fff',
    },
  },
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
