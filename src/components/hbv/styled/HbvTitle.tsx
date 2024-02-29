"use client";

import { styled, Typography } from "@mui/material";

const HbvTitle = styled(Typography)(({ theme }) => ({
  paddingTop: 20,
  textAlign: "center",
  color: theme.palette.primary.contrastText,
}));

export default HbvTitle;
