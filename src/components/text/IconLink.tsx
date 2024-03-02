import { Box, Typography } from "@mui/material";
import React from "react";

import type { MuiNextLinkProps } from "./NextLinkComposed";
import { MuiNextLink } from "./NextLinkComposed";

interface IconLinkProps extends MuiNextLinkProps {
  icon: React.JSX.Element;
  text: string;
}

export const IconLink: React.FC<IconLinkProps> = ({
  icon,
  text,
  ...linkProps
}: IconLinkProps) => {
  return (
    <MuiNextLink {...linkProps}>
      <Box display="flex" alignItems="center" mb={1} mt={1}>
        {icon}
        <Typography component="span" ml={2}>
          {text}
        </Typography>
      </Box>
    </MuiNextLink>
  );
};
