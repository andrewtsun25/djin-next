import Link, { LinkProps } from "next/link";
import React from "react";
import { Box, Typography } from "@mui/material";
import { IconLinkContentContainer } from "./styled";

const ICON_LINK_ARIA_LABEL = "Hyperlink With Icon";

interface IconLinkProps extends LinkProps {
  icon: JSX.Element;
  text: string;
}

const IconLink: React.FC<IconLinkProps> = ({
  icon,
  text,
  ...linkProps
}: IconLinkProps) => {
  return (
    <Link {...linkProps}>
      <IconLinkContentContainer>
        <Box mr={2}>{icon}</Box>
        <Typography>{text}</Typography>
      </IconLinkContentContainer>
    </Link>
  );
};

export default IconLink;
