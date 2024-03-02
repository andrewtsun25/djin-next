"use client";

import { styled } from "@mui/material/styles";
import Image from "next/image";

export const ReclaimerImage = styled(Image)(({ theme }) => ({
  height: "auto",
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  border: "3px solid #ba4ef8",
  borderRadius: 10,
  objectFit: "scale-down",
  maxWidth: "80vw",
}));
