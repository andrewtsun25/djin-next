import { Organization, Project } from "../../../src/types/api";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { listProjects } from "../../../src/dal/api";
import React, { useMemo, useState } from "react";
import Head from "next/head";
import {
  ProjectsBackground,
  ProjectSelectionContainer,
  ProjectsPageTitle,
} from "../../../src/components/projects/styled";
import { Grid } from "@mui/material";
import {
  ProjectCard,
  ProjectOrganizationSelect,
  ProjectSkillSelect,
} from "../../../src/components/projects";
import { sortBy, uniq, uniqBy } from "lodash";

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
  const organizations: Organization[] = useMemo(
    () =>
      sortBy(
        uniqBy(
          projects.map((project) => project.organization),
          (organization: Organization) => organization.id
        ),
        (organization) => organization.name
      ),
    [projects]
  );
  const [selectedOrganizations, setSelectedOrganizations] = useState<
    Organization[]
  >([]);
  const skills: string[] = useMemo(
    () => uniq(projects.map((project) => project.skills).flat()).sort(),
    [projects]
  );
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const displayedProjects = useMemo(() => {
    const selectedOrganizationsIds = selectedOrganizations.map(
      (organization) => organization.id
    );
    return projects
      .filter(({ organization: { id: organizationId } }) =>
        selectedOrganizationsIds.length < 1
          ? true
          : selectedOrganizationsIds.includes(organizationId)
      )
      .filter(({ skills: projectSkills }) =>
        selectedSkills.length < 1
          ? true
          : selectedSkills.some((skill) => projectSkills.includes(skill))
      );
  }, [projects, selectedOrganizations, selectedSkills]);
  return (
    <>
      <Head>
        <title>d.jin - Projects</title>
      </Head>
      <ProjectsBackground>
        <ProjectsPageTitle variant="h2">Coding Projects</ProjectsPageTitle>
        <ProjectSelectionContainer>
          <ProjectOrganizationSelect
            organizations={organizations}
            selectedOrganizations={selectedOrganizations}
            setSelectedOrganizations={setSelectedOrganizations}
          />
          <ProjectSkillSelect
            skills={skills}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
          />
        </ProjectSelectionContainer>
        <Grid container direction="row">
          {displayedProjects.map((project) => (
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
