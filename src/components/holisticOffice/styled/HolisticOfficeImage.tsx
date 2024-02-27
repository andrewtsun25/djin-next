"use client";

import { styled } from "@mui/material/styles";
import Image from "next/image";

const HolisticOfficeImage = styled(Image)(({ theme }) => ({
  maxWidth: "80vw",
  height: "auto",
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
  border: "3px solid #2ab573",
  borderRadius: 10,
  objectFit: "scale-down",
}));

export default HolisticOfficeImage;
