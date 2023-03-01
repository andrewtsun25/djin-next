import { createTheme, Theme } from "@mui/material";
import { orange, red } from "@mui/material/colors";

const djinTheme: Theme = createTheme({
  palette: {
    primary: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText: "#fff",
    },
    secondary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
      contrastText: "#fff",
    },
  },
});

export default djinTheme;
