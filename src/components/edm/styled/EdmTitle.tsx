"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const EdmTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.contrastText,
  textAlign: "center",
}));

export default EdmTitle;
