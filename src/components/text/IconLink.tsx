import { Box, Typography } from "@mui/material";
import React from "react";

import { MuiNextLink, MuiNextLinkProps } from "./MuiNextLink";

interface IconLinkProps extends MuiNextLinkProps {
  icon: React.JSX.Element;
  text: string;
}

export const IconLink: React.FC<IconLinkProps> = ({
  icon,
  text,
  ...linkProps
}: IconLinkProps) => (
  <MuiNextLink {...linkProps}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 1,
        mt: 1,
      }}
    >
      {icon}
      <Typography
        component="span"
        sx={{
          ml: 2,
        }}
      >
        {text}
      </Typography>
    </Box>
  </MuiNextLink>
);
