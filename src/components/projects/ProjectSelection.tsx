"use client";

import { Grid } from "@mui/material";
import { isNil, sortBy, uniq, uniqBy } from "lodash";
import { useQueryState } from "nuqs";
import React, { useMemo } from "react";

import { Organization, Project } from "../../types/api";
import {
  ProjectCard,
  ProjectCount,
  ProjectOrganizationSelect,
  ProjectSkillSelect,
} from "./index";
import { ProjectSelectionContainer } from "./styled";

const skillsQueryParameter: string = "skills";
const skillsSeparator: string = ",";
const organizationsQueryParameter: string = "organizations";
const organizationsSeparator: string = ",";

interface ProjectSelectionProps {
  projects: Project[];
}

export const ProjectSelection: React.FC<ProjectSelectionProps> = ({
  projects,
}: ProjectSelectionProps) => {
  // Organizations
  const organizations: Organization[] = useMemo(
    () =>
      sortBy(
        uniqBy(
          projects.map(({ organization: org }: Project) => org),
          ({ id }: Organization) => id,
        ),
        ({ name }: Organization) => name,
      ),
    [projects],
  );
  const [
    selectedOrganizationsIdsQueryParam,
    setSelectedOrganizationsIdsQueryParam,
  ] = useQueryState(organizationsQueryParameter);
  const selectedOrganizationsIds: Set<string> = useMemo(
    () =>
      isNil(selectedOrganizationsIdsQueryParam) ||
      selectedOrganizationsIdsQueryParam.length < 1
        ? new Set<string>()
        : new Set(
            selectedOrganizationsIdsQueryParam
              .split(organizationsSeparator)
              .filter((organizationId: string) => organizationId.length > 0),
          ),
    [selectedOrganizationsIdsQueryParam],
  );
  const selectedOrganizations: Organization[] = useMemo(
    () =>
      organizations.filter((organization) =>
        selectedOrganizationsIds.has(organization.id),
      ),
    [organizations, selectedOrganizationsIds],
  );
  const setSelectedOrganizations = async (
    newOrganizations: Organization[],
  ): Promise<void> => {
    const newOrganizationsAsQueryParam = newOrganizations
      .map((organization: Organization) => organization.id)
      .sort()
      .join(organizationsSeparator);
    await setSelectedOrganizationsIdsQueryParam(
      newOrganizationsAsQueryParam.length > 0
        ? newOrganizationsAsQueryParam
        : null,
    );
  };
  // Skills
  const skills: string[] = useMemo(
    () => uniq(projects.map(({ skills: s }: Project) => s).flat()).sort(),
    [projects],
  );
  const [selectedSkillsQueryParam, setSelectedSkillsQueryParam] =
    useQueryState(skillsQueryParameter);
  const selectedSkills: string[] = useMemo(() => {
    const selectedSkillsSet: Set<string> =
      isNil(selectedSkillsQueryParam) || selectedSkillsQueryParam.length < 1
        ? new Set<string>()
        : new Set(
            selectedSkillsQueryParam
              .split(",")
              .filter((skill: string): boolean => skill.length > 0),
          );
    return skills.filter((skill: string): boolean =>
      selectedSkillsSet.has(skill),
    );
  }, [selectedSkillsQueryParam, skills]);
  const setSelectedSkills = async (newSkills: string[]): Promise<void> => {
    const newSkillsAsQueryParam: string = newSkills.join(skillsSeparator);
    await setSelectedSkillsQueryParam(
      newSkillsAsQueryParam.length > 0 ? newSkillsAsQueryParam : null,
    );
  };
  // Projects
  const selectedProjects: Project[] = useMemo(
    () =>
      projects
        .filter(({ organization: { id: organizationId } }: Project): boolean =>
          selectedOrganizationsIds.size < 1
            ? true // bypass filter if no organizations specified
            : selectedOrganizationsIds.has(organizationId),
        )
        .filter(({ skills: projectSkills }: Project): boolean =>
          selectedSkills.length < 1
            ? true // bypass filter if no project skills specified
            : selectedSkills.some((skill): boolean =>
                projectSkills.includes(skill),
              ),
        ),
    [projects, selectedOrganizationsIds, selectedSkills],
  );

  return (
    <>
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
        <ProjectCount projects={selectedProjects} />
      </ProjectSelectionContainer>
      <Grid container direction="row" spacing={2}>
        {selectedProjects.map((project: Project) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={project.name}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
