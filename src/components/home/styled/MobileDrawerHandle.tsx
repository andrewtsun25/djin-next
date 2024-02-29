"use client";

import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import { DRAWER_EDGE } from "../drawer/MobileDrawer";

const MobileDrawerHandle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
  position: "absolute",
  top: -DRAWER_EDGE,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  visibility: "visible",
  right: 0,
  left: 0,
}));

export default MobileDrawerHandle;
