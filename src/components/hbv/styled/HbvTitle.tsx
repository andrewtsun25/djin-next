"use client";

import { styled } from "@mui/material";

import { Title } from "../../text";

export const HbvTitle = styled(Title)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.contrastText,
}));
