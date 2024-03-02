"use client";

import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FullWidthCardContainer = styled(Card)(({ theme }) => ({
  "&:not(:first-of-type)": {
    marginTop: theme.spacing(2),
  },
  "&:not(:last-of-type)": {
    marginBottom: theme.spacing(2),
  },
}));
