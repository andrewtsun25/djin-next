"use client";

import { styled, Typography } from "@mui/material";

export const HbvTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.primary.contrastText,
}));
