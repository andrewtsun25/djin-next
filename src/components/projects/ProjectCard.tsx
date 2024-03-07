import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

import { Project } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import { BulletPoints, SkillChips } from "../text";
import { ProjectLinks } from "./ProjectLinks";

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
      <ProjectLinks projectUrls={projectUrls} sx={{ mb: 2 }}></ProjectLinks>
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
