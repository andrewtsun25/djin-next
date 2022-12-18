import React, { HTMLAttributeAnchorTarget } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from "@mui/material";
import { NextLinkComposed, NextLinkComposedProps } from "./NextLinkComposed";

interface HyperlistLinkItemProps {
  className?: string;
  sx?: SxProps<Theme>;
  to: NextLinkComposedProps["to"];
  target?: HTMLAttributeAnchorTarget;
  icon: JSX.Element;
  text: string;
}
const HyperLinkListItem: React.FC<HyperlistLinkItemProps> = ({
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

export default HyperLinkListItem;
