"use client";

import { styled } from "@mui/material";

import { MuiNextLink } from "../../text";

export const HbvLink = styled(MuiNextLink)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));
