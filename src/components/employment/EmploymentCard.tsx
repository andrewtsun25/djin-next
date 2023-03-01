import AppsIcon from "@mui/icons-material/Apps";
import { CardContent, Typography } from "@mui/material";
import React from "react";

import { Employment } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import { BulletPoints, IconLink } from "../text";
import SkillChips from "../text/SkillChips";
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
    employmentType,
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
      <EmploymentJobChip label={employmentType} size="small" />
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
  </EmploymentCardContainer>
);

export default EmploymentCard;
