"use client";

import { styled, Typography } from "@mui/material";

export const HbvContentTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.contrastText,
}));
