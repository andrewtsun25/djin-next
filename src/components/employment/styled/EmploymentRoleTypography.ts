"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const EmploymentRoleTypography = styled(Typography)(({ theme }) => ({
  margin: 0,
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
}));
