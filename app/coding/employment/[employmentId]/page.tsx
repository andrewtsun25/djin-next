import { Box, Typography } from "@mui/material";
import { isNil } from "lodash";
import { Metadata } from "next";
import React from "react";

import {
  EmploymentBackButton,
  EmploymentDateAndDurationContainer,
  EmploymentDurationDisplay,
  EmploymentLogoImage,
  EmploymentRoleAndTypeContainer,
} from "../../../../src/components/employment";
import {
  ImageBackground,
  PageBox,
  ResponsiveSpaceBetweenFlexBox,
} from "../../../../src/components/layout";
import { ProjectsGrid } from "../../../../src/components/projects";
import {
  BulletPoints,
  SkillChips,
  Title,
} from "../../../../src/components/text";
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
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
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

export default async function EmploymentPage(props: {
  params: Promise<EmploymentPageParams>;
}): Promise<React.JSX.Element> {
  const params = await props.params;
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
        <EmploymentBackButton />
        <Box
          sx={{
            borderRadius: 5,
            backgroundColor: "rgba(255, 255, 255, .90)",
          }}
          p={2}
          mb={2}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Title variant="h2" mb={2} textAlign="center">
              {employment.organization.name}
            </Title>
            {employment.organization.logoUrl && (
              <EmploymentLogoImage
                src={employment.organization.logoUrl}
                alt={`Logo for ${employment.organization.name}`}
                height={100}
                width={100}
              />
            )}
          </Box>
          <ResponsiveSpaceBetweenFlexBox>
            <EmploymentRoleAndTypeContainer>
              <Typography sx={{ m: 0, fontSize: "1.5rem" }}>
                {employment.role}
              </Typography>
              <Typography sx={{ m: 0, fontSize: "1.15rem" }}>
                {employment.employmentType}
              </Typography>
            </EmploymentRoleAndTypeContainer>
            <EmploymentDateAndDurationContainer>
              <Typography sx={{ m: 0, fontSize: "1.5rem" }}>
                {getTimeIntervalAsString(
                  employment.startDate,
                  employment.endDate,
                )}
              </Typography>
              <EmploymentDurationDisplay
                employments={[employment]}
                sx={{ m: 0, fontSize: "1.15rem" }}
              />
            </EmploymentDateAndDurationContainer>
          </ResponsiveSpaceBetweenFlexBox>
          <Typography>{employment.description}</Typography>
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
          <Title variant="h2" mb={2}>
            Projects
          </Title>
          <ProjectsGrid projects={projects} />
        </Box>
      </PageBox>
    </>
  );
}
