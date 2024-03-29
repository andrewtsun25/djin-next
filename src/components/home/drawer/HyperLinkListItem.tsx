import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from "@mui/material";
import React, { HTMLAttributeAnchorTarget } from "react";

import { NextLinkComposed, NextLinkComposedProps } from "../../text";

interface HyperlistLinkItemProps {
  className?: string;
  sx?: SxProps<Theme>;
  to: NextLinkComposedProps["to"];
  target?: HTMLAttributeAnchorTarget;
  icon: React.JSX.Element;
  text: string;
}

export const HyperLinkListItem: React.FC<HyperlistLinkItemProps> = ({
  className,
  sx,
  to,
  icon,
  text,
  target,
}: HyperlistLinkItemProps) => {
  return (
    <ListItemButton
      className={className}
      sx={sx}
      component={NextLinkComposed}
      to={to}
      target={target}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
