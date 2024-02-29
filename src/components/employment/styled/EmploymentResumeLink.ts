"use client";

import { styled } from "@mui/material/styles";
import Link from "next/link";

const EmploymentResumeLink = styled(Link)(({ theme }) => ({
  textDecoration: "underline",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));

export default EmploymentResumeLink;
