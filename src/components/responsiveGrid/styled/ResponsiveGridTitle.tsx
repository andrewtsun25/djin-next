import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ResponsiveGridTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.25),
  marginRight: "auto",
  marginBottom: theme.spacing(0.25),
  marginLeft: theme.spacing(0.25),
  textAlign: "center",
}));
