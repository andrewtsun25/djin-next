import { Metadata } from "next";
import React, { Suspense } from "react";

import { Loading } from "../../../src/components/loading";
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
    <ProjectsBackground>
      <ProjectsPageTitle variant="h2">Coding Projects</ProjectsPageTitle>
      <Suspense fallback={<Loading message="Loading projects..." />}>
        <ProjectSelection projects={projects} />
      </Suspense>
    </ProjectsBackground>
  );
}
