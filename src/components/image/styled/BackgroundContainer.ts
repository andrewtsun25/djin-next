"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Follows CSS-only technique #2 (https://css-tricks.com/perfect-full-page-background-image/)
 */
export const BackgroundContainer = styled(Box)({
  position: "fixed",
  top: "-50%",
  left: "-50%",
  width: "200%",
  height: "200%",
});
