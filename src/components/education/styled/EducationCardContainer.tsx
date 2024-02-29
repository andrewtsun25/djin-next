"use client";

import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const EducationCardContainer = styled(Card)(({ theme }) => ({
  padding: theme.spacing(0.5),
  "&:not(:first-child)": {
    marginTop: theme.spacing(2),
  },
  "&:not(:last-child)": {
    marginBottom: theme.spacing(2),
  },
}));

export default EducationCardContainer;
