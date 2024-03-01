"use client";

import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FullWidthCardContainer = styled(Card)(({ theme }) => ({
  "&:not(:first-child)": {
    marginTop: theme.spacing(2),
  },
  "&:not(:last-child)": {
    marginBottom: theme.spacing(2),
  },
}));
