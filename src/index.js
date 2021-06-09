import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider  } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33ab9f",
      main: '#009688',
      dark: "#00695f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ef6694",
      main: "#ec407a",
      dark: "#a52c55",
      contrastText: "#000",
    },
  },
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
reportWebVitals();
