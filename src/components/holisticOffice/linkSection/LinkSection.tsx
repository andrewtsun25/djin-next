import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import LinkList from "./LinkList";
import {
  HolisticOfficeLinkSectionContainer,
  HolisticOfficeLinkSectionTitle,
} from "../styled";
import { HolisticOfficeLink, HolisticOfficeLinkType } from "../../../types/api";

interface LinkSectionProps {
  title: string;
  description: string;
  icon: JSX.Element;

  links: HolisticOfficeLink[];
}

const LinkSection: React.FC<LinkSectionProps> = ({
  title,
  description,
  links,
  icon,
}: LinkSectionProps) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <HolisticOfficeLinkSectionContainer>
      <HolisticOfficeLinkSectionTitle variant={isSmall ? "h3" : "h2"}>
        {title}
      </HolisticOfficeLinkSectionTitle>
      <Typography paragraph>{description}</Typography>
      <LinkList links={links} icon={icon} />
    </HolisticOfficeLinkSectionContainer>
  );
};

export default LinkSection;
