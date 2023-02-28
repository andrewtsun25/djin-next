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

const SKILLS_QUERY_PARAM = "skills";
const ORGANIZATIONS_QUERY_PARAM = "organizations";

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
    const { [ORGANIZATIONS_QUERY_PARAM]: organizationIdsInQuery } =
      router.query;
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
    const { [SKILLS_QUERY_PARAM]: skillsInQuery } = router.query;
    return Array.isArray(skillsInQuery)
      ? skillsInQuery
      : !isNil(skillsInQuery)
      ? decodeURIComponent(skillsInQuery)
          .split(",")
          .filter((skill) => skill.length > 0)
      : [];
  }, [router.query]);
  const selectedProjects: Project[] = useMemo(
    () =>
      projects
        .filter(({ organization: { id: organizationId } }) =>
          selectedOrganizationsIds.length < 1
            ? true // bypass filter if no organizations specified
            : selectedOrganizationsIds.includes(organizationId)
        )
        .filter(({ skills: projectSkills }) =>
          selectedSkills.length < 1
            ? true // bypass filter if no project skills specified
            : selectedSkills.some((skill) => projectSkills.includes(skill))
        ),
    [projects, selectedOrganizationsIds, selectedSkills]
  );
  const updateQueryParameters = (
    newOrganizations: Organization[],
    newSkills: string[]
  ) => {
    // Determine new query parameters
    const newQueryParams: Record<string, string> = {};
    // Only include organizations in query string if they exist.
    if (newOrganizations.length > 0) {
      newQueryParams[ORGANIZATIONS_QUERY_PARAM] = newOrganizations
        .map((o) => o.id)
        .join(",");
    }
    // Only include skills in query string if they exist.
    if (newSkills.length > 0) {
      newQueryParams[SKILLS_QUERY_PARAM] = newSkills.join(",");
    }
    // Generate new URL and push the state.
    router.replace({ query: newQueryParams }, undefined, {
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
          {selectedProjects.map((project) => (
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
