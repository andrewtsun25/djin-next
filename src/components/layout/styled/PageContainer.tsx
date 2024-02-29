"use client";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    paddingBottom: theme.spacing(8),
  },
}));
