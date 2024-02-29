import { Metadata } from "next";
import Head from "next/head";
import React from "react";

import { ProjectSelection } from "../../../src/components/projects";
import {
  ProjectsBackground,
  ProjectsPageTitle,
} from "../../../src/components/projects/styled";
import { listProjects } from "../../../src/dal/api";

export const metadata: Metadata = {
  title: "d.jin - Coding Projects",
};

export default async function ProjectsPage(): Promise<React.JSX.Element> {
  const projects = await listProjects();
  return (
    <>
      <Head>
        <title>d.jin - Coding Projects</title>
      </Head>
      <ProjectsBackground>
        <ProjectsPageTitle variant="h2">Coding Projects</ProjectsPageTitle>
        <ProjectSelection projects={projects} />
      </ProjectsBackground>
    </>
  );
}
