"use client";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

import { Project } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import { IconLink, SkillChips } from "../text";

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
    id,
    skills,
  },
}: ProjectCardProps) => {
  const router = useRouter();
  const projectSpecificPageUrl = `/coding/projects/${id}`;
  const routeToProject = () => {
    router.push(projectSpecificPageUrl);
  };
  return (
    <Card variant="outlined">
      <DurationWithOrganizationCardHeader
        title={projectName}
        subtitle={organizationName}
        startDate={startDate}
        endDate={endDate}
        logoUrl={logoUrl}
        onClick={routeToProject}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      />
      <CardMedia
        image={mediaUrl}
        sx={{
          height: 0,
          pt: "56.25%",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={routeToProject}
      />
      <CardContent>
        <IconLink
          icon={<OpenInNewIcon />}
          text="Learn More"
          href={projectSpecificPageUrl}
        />
        <Typography
          sx={{
            mb: 2,
            mt: 2,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 10,
          }}
        >
          {description}
        </Typography>
        <SkillChips skills={skills} />
      </CardContent>
    </Card>
  );
};
