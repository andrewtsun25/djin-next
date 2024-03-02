import DescriptionIcon from "@mui/icons-material/Description";
import { CardContent, Slide, Typography } from "@mui/material";
import React from "react";

import { BulletPoints } from "../../components/text";
import { HbvResearchPaper } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import { FullWidthCardContainer } from "../layout";
import SkillChips from "../text/SkillChips";
import { HbvResearchCardIconLink } from "./styled";

interface HbvResearchCardProps {
  hbvResearchPaper: HbvResearchPaper;
}

export const HbvResearchCard: React.FC<HbvResearchCardProps> = ({
  hbvResearchPaper: {
    organization,
    name,
    startDate,
    endDate,
    description,
    responsibilities,
    skills,
    url,
  },
}: HbvResearchCardProps) => {
  return (
    <Slide direction="up" in mountOnEnter unmountOnExit>
      <FullWidthCardContainer>
        <DurationWithOrganizationCardHeader
          title={name}
          subtitle={organization.name}
          startDate={startDate}
          endDate={endDate}
          logoUrl={organization.logoUrl}
        />
        <CardContent>
          <HbvResearchCardIconLink
            href={url}
            text="Research Paper"
            icon={<DescriptionIcon />}
            target="_blank"
          />
          <Typography mt={2} paragraph>
            {description}
          </Typography>
          <BulletPoints points={responsibilities} />
          <SkillChips skills={skills} />
        </CardContent>
      </FullWidthCardContainer>
    </Slide>
  );
};
