import { Box, Typography } from "@mui/material";
import Link, { LinkProps } from "next/link";
import React, { HTMLAttributeAnchorTarget } from "react";

import { IconLinkContentContainer } from "./styled";

interface IconLinkProps extends LinkProps {
  icon: JSX.Element;
  text: string;

  target?: HTMLAttributeAnchorTarget | undefined;
}

const IconLink: React.FC<IconLinkProps> = ({
  icon,
  text,
  target,
  ...linkProps
}: IconLinkProps) => {
  return (
    <Link {...linkProps} target={target}>
      <IconLinkContentContainer>
        <Box mr={2}>{icon}</Box>
        <Typography>{text}</Typography>
      </IconLinkContentContainer>
    </Link>
  );
};

export default IconLink;
