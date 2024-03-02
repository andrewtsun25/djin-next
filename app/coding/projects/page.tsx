import { Metadata } from "next";
import React, { Suspense } from "react";

import { ImageBackground } from "../../../src/components/layout";
import { PageBox } from "../../../src/components/layout";
import { Loading } from "../../../src/components/loading";
import {
  ProjectSelection,
  ProjectsPageTitle,
} from "../../../src/components/projects";
import { Urls } from "../../../src/const/url";
import { listProjects } from "../../../src/dal/api";

const bgUrl = `${Urls.AssetRoot}/projects/bg/matrix_bg.png`;

export const metadata: Metadata = {
  title: "d.jin - Coding Projects",
};

export default async function ProjectsPage(): Promise<React.JSX.Element> {
  const projects = await listProjects();
  return (
    <>
      <ImageBackground src={bgUrl} />
      <PageBox>
        <ProjectsPageTitle variant="h2">Coding Projects</ProjectsPageTitle>
        <Suspense fallback={<Loading message="Loading projects..." />}>
          <ProjectSelection projects={projects} />
        </Suspense>
      </PageBox>
    </>
  );
}
