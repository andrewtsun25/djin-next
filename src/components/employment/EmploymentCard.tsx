"use client";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

import { Employment } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import { IconLink, SkillChips } from "../text";

interface EmploymentCardProps {
  employment: Employment;
}

export const EmploymentCard: React.FC<EmploymentCardProps> = ({
  employment: {
    id,
    endDate,
    startDate,
    role,
    organization,
    mediaUrl,
    description,
    skills,
    employmentType,
  },
}: EmploymentCardProps) => {
  const router = useRouter();
  const employmentSpecificPageUrl = `/coding/employment/${id}`;
  const routeToEmployment = () => router.push(employmentSpecificPageUrl);
  return (
    <Card variant="outlined">
      <DurationWithOrganizationCardHeader
        title={organization.name}
        subtitle={role}
        startDate={startDate}
        endDate={endDate}
        logoUrl={organization.logoUrl}
        onClick={routeToEmployment}
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
        onClick={routeToEmployment}
      />
      <CardContent>
        <Chip label={employmentType} size="small" sx={{ mb: 2 }} />
        <IconLink
          icon={<OpenInNewIcon />}
          text="Learn More"
          href={employmentSpecificPageUrl}
        />
        <Typography
          sx={{
            mt: 2,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 8,
            mb: 2,
          }}
        >
          {description}
        </Typography>
        <SkillChips skills={skills} />
      </CardContent>
    </Card>
  );
};
