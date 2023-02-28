import { Organization, Project } from "../../../src/types/api";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { listProjects } from "../../../src/dal/api";
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { isNil, sortBy, uniq, uniqBy } from "lodash";
import { useRouter } from "next/router";

const BASE_PATH = "/coding/projects";

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
  const router = useRouter();
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
  const skills: string[] = useMemo(
    () => uniq(projects.map((project) => project.skills).flat()).sort(),
    [projects]
  );
  const selectedOrganizationsIds: string[] = useMemo(() => {
    const { organizations: organizationIdsInQuery } = router.query;
    return Array.isArray(organizationIdsInQuery)
      ? organizationIdsInQuery
      : !isNil(organizationIdsInQuery)
      ? decodeURIComponent(organizationIdsInQuery).split(",")
      : [];
  }, [router.query]);
  const selectedOrganizations = useMemo(
    () =>
      organizations.filter((organization) =>
        selectedOrganizationsIds.includes(organization.id)
      ),
    [organizations, selectedOrganizationsIds]
  );
  const selectedSkills: string[] = useMemo(() => {
    const { skills: skillsInQuery } = router.query;
    return Array.isArray(skillsInQuery)
      ? skillsInQuery
      : !isNil(skillsInQuery)
      ? decodeURIComponent(skillsInQuery)
          .split(",")
          .filter((s) => s.length > 0)
      : [];
  }, [router.query]);
  const displayedProjects = useMemo(
    () =>
      projects
        .filter(({ organization: { id: organizationId } }) =>
          selectedOrganizationsIds.length < 1
            ? true
            : selectedOrganizationsIds.includes(organizationId)
        )
        .filter(({ skills: projectSkills }) =>
          selectedSkills.length < 1
            ? true
            : selectedSkills.some((skill) => projectSkills.includes(skill))
        ),
    [projects, selectedOrganizationsIds, selectedSkills]
  );
  const updateQueryParameters = (
    newOrganizations: Organization[],
    newSkills: string[]
  ) => {
    // Determine new query parameters
    const searchParams = new URLSearchParams();
    // Only include organizations in query string if they exist.
    if (newOrganizations.length > 0) {
      searchParams.append(
        "organizations",
        newOrganizations.map((o) => o.id).join(",")
      );
    }
    // Only include skills in query string if they exist.
    if (newSkills.length > 0) {
      searchParams.append("skills", newSkills.join(","));
    }
    const searchParamsAsStr = searchParams.toString();
    // Generate new URL and push the state.
    const newUrl: string =
      searchParamsAsStr.length > 0
        ? `${BASE_PATH}?${searchParamsAsStr}`
        : BASE_PATH;
    router.replace(newUrl, undefined, {
      shallow: true,
    });
  };
  const setSelectedOrganizations = (newOrganizations: Organization[]) => {
    updateQueryParameters(newOrganizations, selectedSkills);
  };
  const setSelectedSkills = (newSkills: string[]) => {
    updateQueryParameters(selectedOrganizations, newSkills);
  };
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
