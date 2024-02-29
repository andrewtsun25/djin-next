"use client";

import { createTheme, Theme } from "@mui/material";
import { green, red } from "@mui/material/colors";

const djinTheme: Theme = createTheme({
  palette: {
    primary: {
      light: "#69696a",
      main: "#28282a",
      dark: "#1e1e1f",
    },
    secondary: {
      light: "#fff5f8",
      main: "#ff3366",
      dark: "#e62958",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      "-apple-system",
      "BlinkMacSystemFont",
      "roboto",
    ].join(),
  },
});

export default djinTheme;
