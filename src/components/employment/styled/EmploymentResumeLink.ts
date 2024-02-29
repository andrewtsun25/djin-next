"use client";

import { styled } from "@mui/material/styles";
import Link from "next/link";

export const EmploymentResumeLink = styled(Link)(({ theme }) => ({
  textDecoration: "underline",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));
