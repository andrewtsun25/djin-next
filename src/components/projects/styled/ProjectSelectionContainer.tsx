"use client";

import { alpha, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProjectSelectionContainer = styled(Box)(({ theme }) => ({
  borderRadius: 10,
  backgroundColor: alpha("#fff", 0.9),
  padding: theme.spacing(1),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export default ProjectSelectionContainer;
