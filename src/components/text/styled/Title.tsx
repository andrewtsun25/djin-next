"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ultraSmall: number = 300;

export const Title = styled(Typography)({
  textAlign: "center",
  wordBreak: "normal",
  hyphens: "auto",
  [`@media screen and (max-width: ${ultraSmall}px)`]: {
    wordBreak: "break-all",
  },
});
