import { Box, Typography } from "@mui/material";
import { isNil } from "lodash";
import { Metadata } from "next";
import React from "react";

import { EmploymentDurationDisplay } from "../../../../src/components/employment";
import { ImageBackground, PageBox } from "../../../../src/components/layout";
import { ProjectsGrid } from "../../../../src/components/projects";
import { BulletPoints } from "../../../../src/components/text";
import SkillChips from "../../../../src/components/text/SkillChips";
import { Urls } from "../../../../src/const/url";
import {
  getEmployment,
  listProjectsByOrganizationId,
} from "../../../../src/dal/api";
import { Employment, Project } from "../../../../src/types/api";
import { getTimeIntervalAsString } from "../../../../src/util/date";

interface EmploymentPageParams {
  employmentId: string;
}

const bgUrl = `${Urls.AssetRoot}/employment/bg/anduril_office.png`;

export async function generateStaticParams(): Promise<EmploymentPageParams[]> {
  return [
    { employmentId: "amazon" },
    { employmentId: "anduril" },
    { employmentId: "costar" },
    { employmentId: "dotdashMeredith" },
    { employmentId: "google" },
    { employmentId: "hli" },
    { employmentId: "oura" },
    { employmentId: "quotientTechnologies" },
    { employmentId: "yahoo1" },
    { employmentId: "yahoo2" },
  ];
}

type GenerateMetadataProps = {
  params: EmploymentPageParams;
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  // read route params
  const employment: Employment | null = await getEmployment(
    params.employmentId,
  );
  if (isNil(employment)) {
    throw new Error(
      `Employment for employmentId ${params.employmentId} could not be found`,
    );
  }
  return {
    title: `d.jin - ${employment.organization.name}`,
  };
}

export default async function EmploymentPage({
  params,
}: {
  params: EmploymentPageParams;
}): Promise<React.JSX.Element> {
  const employment: Employment | null = await getEmployment(
    params.employmentId,
  );
  if (isNil(employment)) {
    throw new Error(
      `Employment for employmentId ${params.employmentId} could not be found`,
    );
  }
  const projects: Project[] = await listProjectsByOrganizationId(
    employment.organization.id,
  );
  return (
    <>
      <ImageBackground src={bgUrl} />
      <PageBox>
        <Box
          sx={{
            borderRadius: 5,
            backgroundColor: "rgba(255, 255, 255, .90)",
          }}
          p={2}
          mb={2}
        >
          <Typography variant="h1" mb={2} textAlign="center">
            {employment.organization.name}
          </Typography>
          <Typography variant="h2" mt={2} mb={2} textAlign="center">
            {employment.role}
          </Typography>
          <Typography
            mb={2}
            mt={2}
            textAlign="center"
            sx={{ fontSize: "1.5em" }}
          >
            {getTimeIntervalAsString(employment.startDate, employment.endDate)}
          </Typography>
          <EmploymentDurationDisplay
            employments={[employment]}
            sx={{ textAlign: "center", fontSize: "1.5em" }}
          />
          <Typography paragraph>{employment.description}</Typography>
          <BulletPoints points={employment.responsibilities} />
          <SkillChips skills={employment.skills} />
        </Box>
        <Box
          sx={{
            borderRadius: 5,
            backgroundColor: "rgba(255, 255, 255, .90)",
          }}
          p={2}
        >
          <Typography variant="h2" mb={2} textAlign="center">
            Projects
          </Typography>
          <ProjectsGrid projects={projects} />
        </Box>
      </PageBox>
    </>
  );
}
