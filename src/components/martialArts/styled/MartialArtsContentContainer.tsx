"use client";

import { alpha, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const MartialArtsContentContainer = styled(Container)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.85),
  padding: theme.spacing(3),
}));

export default MartialArtsContentContainer;
