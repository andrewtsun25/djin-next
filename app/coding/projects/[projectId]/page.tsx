import { Box, Typography } from "@mui/material";
import { isNil } from "lodash";
import { Metadata } from "next";
import React from "react";

import { EmploymentLogoImage } from "../../../../src/components/employment";
import {
  FullWidthImage,
  ImageBackground,
  PageContainer,
  ResponsiveSpaceBetweenFlexBox,
} from "../../../../src/components/layout";
import { ProjectLinks } from "../../../../src/components/projects";
import {
  BulletPoints,
  MuiNextLink,
  SkillChips,
} from "../../../../src/components/text";
import { Urls } from "../../../../src/const/url";
import { getProject } from "../../../../src/dal/api";
import { Project } from "../../../../src/types/api";
import { getTimeIntervalAsString } from "../../../../src/util/date";

interface ProjectPageParams {
  projectId: string;
}

const bgUrl = `${Urls.AssetRoot}/projects/bg/matrix_bg.png`;

export async function generateStaticParams(): Promise<ProjectPageParams[]> {
  return [
    { projectId: "adaCompliantPointOfSaleSurveyInvitations" },
    { projectId: "areaguides" },
    { projectId: "bizcoinSurveysMobileAppV2" },
    { projectId: "bizcoinSurveysPanelistActivationApi" },
    { projectId: "bizcoinSurveysWebPortalV1" },
    { projectId: "bizcoinSurveysWebPortalV2" },
    { projectId: "bizrateInsightsHomepage" },
    { projectId: "brandCaster" },
    { projectId: "btgApparel" },
    { projectId: "capacitor" },
    { projectId: "cloe" },
    { projectId: "closeOfBooks" },
    { projectId: "configEditorProfiles" },
    { projectId: "conopModes" },
    { projectId: "dailyCashGiveawaySweepstakesAirflowJob" },
    { projectId: "dataCurationParsers" },
    { projectId: "dataPipelineDashboardImprovements" },
    { projectId: "dataPipelineSummary" },
    { projectId: "defaultHandling" },
    { projectId: "defiance" },
    { projectId: "djinDev" },
    { projectId: "djinDevV2" },
    { projectId: "fearlessLaMobile" },
    { projectId: "fearlessLaWebsite" },
    { projectId: "latticeControlApp" },
    { projectId: "latticeReportsApi" },
    { projectId: "letterSuggestions" },
    { projectId: "listingPlans" },
    { projectId: "mantisTestHarness" },
    { projectId: "metrix" },
    { projectId: "queryCategorizationModuleAnalysis" },
    { projectId: "queryCategorizationModulesImplementation" },
    { projectId: "requestTourFlowUnification" },
    { projectId: "samsungTvHardwareSupport" },
    { projectId: "simplifiedAuthConsole" },
    { projectId: "surveyInvitationTemplatizationService" },
    { projectId: "trackQL" },
    { projectId: "uscTkdWebsite" },
    { projectId: "viTelex" },
    { projectId: "vocFeedbackBigCommercePlugin" },
    { projectId: "vocFeedbackShopifyPlugin" },
    { projectId: "withoutabox" },
  ];
}

type GenerateMetadataProps = {
  params: ProjectPageParams;
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  // read route params
  const project: Project | null = await getProject(params.projectId);
  if (isNil(project)) {
    throw new Error(
      `Project for projectId ${params.projectId} could not be found`,
    );
  }
  return {
    title: `d.jin - ${project.name}`,
  };
}

export default async function EmploymentPage({
  params,
}: {
  params: ProjectPageParams;
}): Promise<React.JSX.Element> {
  const project: Project | null = await getProject(params.projectId);
  if (isNil(project)) {
    throw new Error(
      `Project for projectId ${params.projectId} could not be found`,
    );
  }
  const {
    name: projectName,
    startDate,
    endDate,
    organization: { id: organizationId, name: organizationName, logoUrl },
    mediaUrl,
    description,
    responsibilities,
    skills,
    projectUrls,
    disclaimer,
  } = project;
  return (
    <>
      <ImageBackground src={bgUrl} />
      <PageContainer
        maxWidth="lg"
        sx={{ backgroundColor: "rgba(255, 255, 255, .90)" }}
      >
        <Typography variant="h2" mb={2} textAlign="center">
          {projectName}
        </Typography>
        <FullWidthImage
          src={mediaUrl}
          alt={`${projectName} image`}
          height={1400}
          width={1600}
        />
        <ResponsiveSpaceBetweenFlexBox>
          <Box display="flex" alignItems="center">
            {logoUrl && (
              <EmploymentLogoImage
                src={logoUrl}
                alt={`Logo for ${organizationName}`}
                height={40}
                width={40}
              />
            )}
            <MuiNextLink href={`/coding/employment/${organizationId}`}>
              <Typography
                sx={{
                  m: 0,
                  ml: logoUrl ? 1 : 0,
                  fontSize: "1.5rem",
                }}
              >
                {organizationName}
              </Typography>
            </MuiNextLink>
          </Box>
          <Typography sx={{ m: 0, fontSize: "1.5rem" }}>
            {getTimeIntervalAsString(startDate, endDate)}
          </Typography>
        </ResponsiveSpaceBetweenFlexBox>
        <SkillChips skills={skills} sx={{ mb: 2 }} />
        <ProjectLinks
          projectUrls={projectUrls}
          sx={{ mt: 2, mb: 2 }}
        ></ProjectLinks>
        {disclaimer && (
          <Typography fontWeight="bold" paragraph>
            Disclaimer: {disclaimer}
          </Typography>
        )}
        <Typography paragraph>{description}</Typography>
        <BulletPoints points={responsibilities} />
      </PageContainer>
    </>
  );
}
