"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const HomeDescriptionTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.primary.contrastText,
}));

export default HomeDescriptionTypography;
