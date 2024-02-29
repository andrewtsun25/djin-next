"use client";

import { styled, Typography } from "@mui/material";

const HbvContentTypography = styled(Typography)(({ theme }) => ({
  margin: "20px auto",
  color: theme.palette.primary.contrastText,
}));

export default HbvContentTypography;
