"use client";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const EdmPageContent = styled(Container)(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(theme.breakpoints.up("sm") ? 8 : 2),
}));
