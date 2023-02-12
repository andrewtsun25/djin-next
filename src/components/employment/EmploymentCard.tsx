import { Employment } from "../../types/api";
import React from "react";
import { CardContent, Typography } from "@mui/material";
import { BulletPoints, IconLink } from "../text";
import SkillChips from "../text/SkillChips";
import AppsIcon from "@mui/icons-material/Apps";
import { DurationWithOrganizationCardHeader } from "../card";
import {
  EmploymentCardContainer,
  EmploymentCardMedia,
  EmploymentJobChip,
} from "./styled";

interface EmploymentCardProps {
  employment: Employment;
}

const EmploymentCard: React.FC<EmploymentCardProps> = ({
  employment: {
    endDate,
    startDate,
    role,
    organization,
    mediaUrl,
    description,
    responsibilities,
    skills,
    jobType,
  },
}: EmploymentCardProps) => (
  <EmploymentCardContainer variant="outlined">
    <DurationWithOrganizationCardHeader
      title={organization.name}
      subtitle={role}
      startDate={startDate}
      endDate={endDate}
      logoUrl={organization.logoUrl}
    />
    <EmploymentCardMedia image={mediaUrl} />
    <CardContent>
      <EmploymentJobChip label={jobType} size="small" />
      <IconLink
        icon={<AppsIcon />}
        text="Projects"
        href={`/coding/projects?organization=${organization.id}`}
        target="_self"
      />
      <Typography paragraph>{description}</Typography>
      <BulletPoints points={responsibilities} />
      <SkillChips skills={skills} />
    </CardContent>
  </EmploymentCardContainer>
);

export default EmploymentCard;
