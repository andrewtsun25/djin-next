"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SkillChipContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "left",
  flexWrap: "wrap",
  "& > *": {
    margin: theme.spacing(0.5),
  },
}));

export default SkillChipContainer;
