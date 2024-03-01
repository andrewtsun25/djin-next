import { Box, Typography } from "@mui/material";
import React from "react";

import type { MuiNextLinkProps } from "./MuiNextLink";
import { MuiNextLink } from "./MuiNextLink";

interface IconLinkProps extends MuiNextLinkProps {
  icon: React.JSX.Element;
  text: string;
}

const IconLink: React.FC<IconLinkProps> = ({
  icon,
  text,
  ...linkProps
}: IconLinkProps) => {
  return (
    <MuiNextLink {...linkProps}>
      <Box display="flex" alignItems="center">
        <Box mr={2}>{icon}</Box>
        <Typography>{text}</Typography>
      </Box>
    </MuiNextLink>
  );
};

export default IconLink;
