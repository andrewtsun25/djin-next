"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    paddingBottom: theme.spacing(8), // Mobile drawer should not obscure the page content
  },
}));
