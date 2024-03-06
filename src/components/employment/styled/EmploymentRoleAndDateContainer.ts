"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const EmploymentRoleAndDateContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "normal",
  },
}));
