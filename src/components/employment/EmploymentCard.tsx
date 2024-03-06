"use client";

import AppsIcon from "@mui/icons-material/Apps";
import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

import { Employment } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import { BulletPoints, IconLink } from "../text";
import SkillChips from "../text/SkillChips";

interface EmploymentCardProps {
  employment: Employment;
}

export const EmploymentCard: React.FC<EmploymentCardProps> = ({
  employment: {
    endDate,
    startDate,
    role,
    organization,
    mediaUrl,
    description,
    responsibilities,
    skills,
    employmentType,
  },
}: EmploymentCardProps) => {
  const router = useRouter();
  const onCardHeaderClick = () =>
    router.push(`/coding/employment/${organization.id}`);
  return (
    <Card variant="outlined">
      <DurationWithOrganizationCardHeader
        title={organization.name}
        subtitle={role}
        startDate={startDate}
        endDate={endDate}
        logoUrl={organization.logoUrl}
        onClick={onCardHeaderClick}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      />
      <CardMedia image={mediaUrl} sx={{ height: 0, pt: "56.25%" }} />
      <CardContent>
        <Chip label={employmentType} size="small" sx={{ mb: 2 }} />
        <IconLink
          icon={<AppsIcon />}
          text="Projects"
          href={`/coding/projects?organizations=${organization.id}`}
          target="_self"
        />
        <Typography paragraph>{description}</Typography>
        <BulletPoints points={responsibilities} />
        <SkillChips skills={skills} />
      </CardContent>
    </Card>
  );
};
