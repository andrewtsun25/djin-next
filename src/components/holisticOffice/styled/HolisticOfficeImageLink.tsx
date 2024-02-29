"use client";

import { styled } from "@mui/material/styles";
import Link from "next/link";

const HolisticOfficeImageLink = styled(Link)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export default HolisticOfficeImageLink;
