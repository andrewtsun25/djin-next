"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MartialArtsPageTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginRight: theme.spacing(2),
  marginBottom: 0,
  [theme.breakpoints.down("sm")]: {
    marginRight: 0,
    marginBottom: theme.spacing(2),
  },
}));
