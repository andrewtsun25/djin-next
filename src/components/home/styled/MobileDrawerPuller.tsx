"use client";

import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const MobileDrawerPuller = styled(Box)(({ theme }) => ({
  width: 100,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 50px)",
}));
