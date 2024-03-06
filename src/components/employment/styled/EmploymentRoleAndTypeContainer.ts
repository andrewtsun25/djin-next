"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const EmploymentRoleAndTypeContainer = styled(Box)(({ theme }) => ({
  margin: 0,
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
}));
