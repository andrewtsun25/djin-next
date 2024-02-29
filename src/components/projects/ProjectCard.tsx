import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { map } from "lodash";
import React from "react";

import { Project } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import { StorybookIcon } from "../icons";
import { BulletPoints, IconLink } from "../text";
import SkillChips from "../text/SkillChips";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
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
      {projectUrls &&
        map(projectUrls, (url: string, urlName: string) => {
          let icon: JSX.Element;
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

export default ProjectCard;
