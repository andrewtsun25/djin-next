"use client";

import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const EducationCardContainer = styled(Card)(({ theme }) => ({
  padding: theme.spacing(0.5),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export default EducationCardContainer;
