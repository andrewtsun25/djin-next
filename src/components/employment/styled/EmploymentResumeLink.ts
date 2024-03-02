"use client";

import { styled } from "@mui/material/styles";

import { MuiNextLink } from "../../text";

export const EmploymentResumeLink = styled(MuiNextLink)(({ theme }) => ({
  textDecoration: "underline",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));
