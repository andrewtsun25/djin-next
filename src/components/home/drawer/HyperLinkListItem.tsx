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
  sx?: SxProps<Theme>;
  to: NextLinkComposedProps["to"];
  target?: HTMLAttributeAnchorTarget;
  icon: JSX.Element;
  text: string;
}
const HyperLinkListItem: React.FC<HyperlistLinkItemProps> = ({
  sx,
  to,
  icon,
  text,
  target,
}: HyperlistLinkItemProps) => {
  return (
    <ListItemButton
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
