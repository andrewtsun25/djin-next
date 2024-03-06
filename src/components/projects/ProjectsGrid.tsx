import { Grid, Typography } from "@mui/material";
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
    <Grid container direction="row" spacing={2}>
      {projects.map((project: Project) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={project.name}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography textAlign="center">No projects to display.</Typography>
  );
};
