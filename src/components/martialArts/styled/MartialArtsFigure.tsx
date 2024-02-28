"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MartialArtsFigure = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.down("xl")]: {
    padding: theme.spacing(0),
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBlockStart: 0,
  marginBlockEnd: 0,
  marginInlineStart: 0,
  marginInlineEnd: 0,
}));

export default MartialArtsFigure;
