"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ScoresTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
}));

export default ScoresTitle;
