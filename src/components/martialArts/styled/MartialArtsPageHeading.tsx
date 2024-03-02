"use client";

import { Box, styled } from "@mui/material";

export const MartialArtsPageHeading = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
