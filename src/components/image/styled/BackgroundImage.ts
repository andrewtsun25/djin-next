"use client";

import { styled } from "@mui/material/styles";
import Image from "next/image";

/**
 * Follows CSS-only technique #2 (https://css-tricks.com/perfect-full-page-background-image/)
 */
export const BackgroundImage = styled(Image)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: "auto",
  minWidth: "50%",
  minHeight: "50%",
});
