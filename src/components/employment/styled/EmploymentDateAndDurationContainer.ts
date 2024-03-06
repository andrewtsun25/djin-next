"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const EmploymentDateAndDurationContainer = styled(Box)(({ theme }) => ({
  margin: 0,
  textAlign: "right",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
}));
