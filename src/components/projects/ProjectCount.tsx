import { Typography } from "@mui/material";
import React from "react";

import { Project } from "../../types/api";

interface ProjectCountProps {
  projects: Project[];
}

const ProjectCount: React.FC<ProjectCountProps> = ({
  projects,
}: ProjectCountProps) => {
  const projectCount: number = projects.length;
  const projectCountStr: string = `${projectCount} ${
    projectCount === 1 ? "project" : "projects"
  } selected`;
  return <Typography m={2}>{projectCountStr}</Typography>;
};

export default ProjectCount;
