"use client";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const HolisticOfficePageContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    paddingBottom: theme.spacing(8), // Mobile drawer should not obscure the page content
  },
}));

export default HolisticOfficePageContainer;
