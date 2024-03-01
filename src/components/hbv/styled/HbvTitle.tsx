"use client";

import { styled, Typography } from "@mui/material";

const HbvTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.primary.contrastText,
}));

export default HbvTitle;
