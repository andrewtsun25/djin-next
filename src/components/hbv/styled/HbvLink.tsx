"use client";

import { styled } from "@mui/material";

import { MuiNextLink } from "../../text";

const HbvLink = styled(MuiNextLink)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export default HbvLink;
