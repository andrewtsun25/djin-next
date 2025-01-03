import DescriptionIcon from "@mui/icons-material/Description";
import { CardContent, Slide, Typography } from "@mui/material";
import React from "react";

import { HbvResearchPaper } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import { FullWidthCardContainer } from "../layout";
import { BulletPoints, SkillChips } from "../text";
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
          <Typography
            sx={{
              mt: 2,
            }}
          >
            {description}
          </Typography>
          <BulletPoints points={responsibilities} />
          <SkillChips skills={skills} />
        </CardContent>
      </FullWidthCardContainer>
    </Slide>
  );
};
