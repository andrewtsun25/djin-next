import { Grid2, Typography } from "@mui/material";
import React from "react";

import { Project } from "../../types/api";
import { ProjectCard } from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
}
export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects,
}: ProjectsGridProps) => {
  return projects.length > 0 ? (
    <Grid2 container direction="row" spacing={2}>
      {projects.map((project: Project) => (
        <Grid2 size={{ xs: 12, md: 5, lg: 4, xl: 3 }} key={project.name}>
          <ProjectCard project={project} />
        </Grid2>
      ))}
    </Grid2>
  ) : (
    <Typography
      sx={{
        textAlign: "center",
      }}
    >
      No projects to display.
    </Typography>
  );
};
