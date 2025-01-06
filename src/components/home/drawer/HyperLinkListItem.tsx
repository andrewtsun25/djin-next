import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import NextLink from "next/link";
import React from "react";

type ListItemButtonProps = React.ComponentProps<
  typeof ListItemButton<typeof NextLink>
>;

interface HyperLinkListItemProps
  extends Omit<ListItemButtonProps, "component"> {
  icon: React.JSX.Element;
  text: string;
  target?: string;
}

export const HyperLinkListItem: React.FC<HyperLinkListItemProps> = ({
  icon,
  text,
  ...listItemButtonProps
}: HyperLinkListItemProps) => {
  return (
    <ListItemButton component={NextLink} {...listItemButtonProps}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
