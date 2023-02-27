import { Project } from "../../../src/types/api";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { listProjects } from "../../../src/dal/api";
import React from "react";
import Head from "next/head";
import {
  ProjectsBackground,
  ProjectsPageTitle,
} from "../../../src/components/projects/styled";
import { Grid } from "@mui/material";
import { ProjectCard } from "../../../src/components/projects";

interface ProjectsPageProps {
  projects: Project[];
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
  const projects = await listProjects();
  return {
    props: {
      projects,
    },
  };
};

type ProjectsNextPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ProjectsPage = ({ projects }: ProjectsNextPageProps) => {
  return (
    <>
      <Head>
        <title>d.jin - Projects</title>
      </Head>
      <ProjectsBackground>
        <ProjectsPageTitle variant="h2">Coding Projects</ProjectsPageTitle>
        <Grid container direction="row">
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={project.name}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </ProjectsBackground>
    </>
  );
};

export default ProjectsPage;
