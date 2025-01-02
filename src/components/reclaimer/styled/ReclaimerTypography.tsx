"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ReclaimerTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  alignSelf: "flex-start",
}));
