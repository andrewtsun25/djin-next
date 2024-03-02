import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { isEmpty, isNil, map } from "lodash";
import React from "react";

import { Project } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import { StorybookIcon } from "../icons";
import { BulletPoints, IconLink } from "../text";
import SkillChips from "../text/SkillChips";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project: {
    name: projectName,
    startDate,
    endDate,
    organization: { name: organizationName, logoUrl },
    mediaUrl,
    description,
    responsibilities,
    skills,
    projectUrls,
    disclaimer,
  },
}: ProjectCardProps) => (
  <Card variant="outlined">
    <DurationWithOrganizationCardHeader
      title={projectName}
      subtitle={organizationName}
      startDate={startDate}
      endDate={endDate}
      logoUrl={logoUrl}
    />
    <CardMedia image={mediaUrl} sx={{ height: 0, pt: "56.25%" }} />
    <CardContent>
      {!isNil(projectUrls) && !isEmpty(projectUrls) && (
        <Box mb={2}>
          {map(projectUrls, (url: string, urlName: string) => {
            let icon: React.JSX.Element;
            switch (urlName) {
              case "Source Code":
                icon = <GitHubIcon />;
                break;
              case "Storybook":
                icon = <StorybookIcon />;
                break;
              default:
                icon = <LinkIcon />;
            }
            return (
              <IconLink key={urlName} href={url} text={urlName} icon={icon} />
            );
          })}
        </Box>
      )}
      {disclaimer && (
        <Typography fontWeight="bold" paragraph>
          Disclaimer: {disclaimer}
        </Typography>
      )}
      <Typography paragraph>{description}</Typography>
      <BulletPoints points={responsibilities} />
      <SkillChips skills={skills} />
    </CardContent>
  </Card>
);
