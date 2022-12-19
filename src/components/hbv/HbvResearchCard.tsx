import { CardContent, Slide, Typography } from "@mui/material";
import { BulletPoints } from "../../components/text";
import { HbvResearchPaper } from "../../types/data";
import DescriptionIcon from "@mui/icons-material/Description";
import React from "react";
import HbvResearchCardIconLink from "./styled/HbvResearchCardIconLink";
import HbvResearchCardContainer from "./styled/HbvResearchCardContainer";
import { DurationWithOrganizationCardHeader } from "../card";
import SkillChips from "../text/SkillChips";

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
    paperLink,
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
            href={paperLink}
            text="Research Paper"
            icon={<DescriptionIcon />}
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
