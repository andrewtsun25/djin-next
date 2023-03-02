import DescriptionIcon from "@mui/icons-material/Description";
import { CardContent, Slide, Typography } from "@mui/material";
import React from "react";

import { BulletPoints } from "../../components/text";
import { HbvResearchPaper } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import SkillChips from "../text/SkillChips";
import HbvResearchCardContainer from "./styled/HbvResearchCardContainer";
import HbvResearchCardIconLink from "./styled/HbvResearchCardIconLink";

interface HbvResearchCardProps {
  hbvResearchPaper: HbvResearchPaper;
}

const HbvResearchCard: React.FC<HbvResearchCardProps> = ({
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
      <HbvResearchCardContainer>
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
          <Typography paragraph>{description}</Typography>
          <BulletPoints points={responsibilities} />
          <SkillChips skills={skills} />
        </CardContent>
      </HbvResearchCardContainer>
    </Slide>
  );
};

export default HbvResearchCard;
