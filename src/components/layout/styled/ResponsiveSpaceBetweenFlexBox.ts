"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ResponsiveSpaceBetweenFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "normal",
  },
}));
