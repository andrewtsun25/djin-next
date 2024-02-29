"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const IconLinkContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
}));

export default IconLinkContentContainer;
