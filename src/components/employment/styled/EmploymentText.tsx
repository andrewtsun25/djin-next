"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const EmploymentText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  marginLeft: "auto",
  marginRight: "auto",
}));

export default EmploymentText;
