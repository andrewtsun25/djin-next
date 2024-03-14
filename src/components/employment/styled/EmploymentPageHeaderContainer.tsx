"use client";

import { alpha, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const EmploymentPageHeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: alpha("#fff", 0.75),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: 10,
}));
