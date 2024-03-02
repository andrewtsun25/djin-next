"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

import { HolisticOfficeLink } from "../../../types/api";
import { HolisticOfficeSectionHeader } from "../styled";
import LinkList from "./LinkList";

interface LinkSectionProps {
  title: string;
  description: string;
  icon: React.JSX.Element;

  links: HolisticOfficeLink[];
}

const LinkSection: React.FC<LinkSectionProps> = ({
  title,
  description,
  links,
  icon,
}: LinkSectionProps) => {
  return (
    <Box textAlign="left" width="100%">
      <HolisticOfficeSectionHeader variant="h2">
        {title}
      </HolisticOfficeSectionHeader>
      <Typography paragraph sx={{ alignSelf: "flex-start" }}>
        {description}
      </Typography>
      <LinkList links={links} icon={icon} />
    </Box>
  );
};

export default LinkSection;
