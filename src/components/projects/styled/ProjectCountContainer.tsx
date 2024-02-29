"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProjectCountContainer = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    justifySelf: "flex-end",
  },
}));

export default ProjectCountContainer;
