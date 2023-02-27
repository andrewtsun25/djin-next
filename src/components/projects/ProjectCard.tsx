import { Project } from "../../types/api";
import React from "react";
import { CardContent, Typography } from "@mui/material";
import { DurationWithOrganizationCardHeader } from "../card";
import { BulletPoints, IconLink } from "../text";
import SkillChips from "../text/SkillChips";
import { map } from "lodash";
import { StorybookIcon } from "../icons";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import {
  ProjectCardContainer,
  ProjectCardMedia,
  ProjectDisclaimer,
} from "./styled";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: {
    name,
    startDate,
    endDate,
    organization,
    mediaUrl,
    description,
    responsibilities,
    skills,
    projectUrls,
    disclaimer,
  },
}: ProjectCardProps) => (
  <ProjectCardContainer variant="outlined">
    <DurationWithOrganizationCardHeader
      title={name}
      subtitle={organization.name}
      startDate={startDate}
      endDate={endDate}
      logoUrl={organization.logoUrl}
    />
    <ProjectCardMedia image={mediaUrl} />
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
        <ProjectDisclaimer paragraph>
          Disclaimer: {disclaimer}
        </ProjectDisclaimer>
      )}
      <Typography paragraph>{description}</Typography>
      <BulletPoints points={responsibilities} />
      <SkillChips skills={skills} />
    </CardContent>
  </ProjectCardContainer>
);

export default ProjectCard;
