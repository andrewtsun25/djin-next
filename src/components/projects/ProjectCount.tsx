import React from "react";

import { Project } from "../../types/api";
import { ProjectCountContainer } from "./styled";

interface ProjectCountProps {
  projects: Project[];
}

const ProjectCount: React.FC<ProjectCountProps> = ({
  projects,
}: ProjectCountProps) => {
  const projectCount = projects.length;
  const projectCountStr = `${projectCount} ${
    projectCount === 1 ? "project" : "projects"
  } selected`;
  return <ProjectCountContainer>{projectCountStr}</ProjectCountContainer>;
};

export default ProjectCount;
