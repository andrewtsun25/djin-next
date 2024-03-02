"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BackgroundImageBox = styled(Box)({
  backgroundPositionX: "center",
  backgroundPositionY: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -1,
});
