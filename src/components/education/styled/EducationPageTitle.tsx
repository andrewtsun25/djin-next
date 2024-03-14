"use client";

import { styled } from "@mui/material/styles";

import { Title } from "../../text";

export const EducationPageTitle = styled(Title)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.contrastText,
}));
