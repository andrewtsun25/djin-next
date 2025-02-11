import { Typography } from "@mui/material";
import React from "react";

import { Project } from "../../types/api";

interface ProjectCountProps {
  projects: Project[];
}

export const ProjectCount: React.FC<ProjectCountProps> = ({
  projects,
}: ProjectCountProps) => {
  const projectCount: number = projects.length;
  const projectCountStr: string = `${projectCount} ${
    projectCount === 1 ? "project" : "projects"
  } selected`;
  return (
    <Typography sx={{
      m: 2
    }}>{projectCountStr}</Typography>
  );
};
