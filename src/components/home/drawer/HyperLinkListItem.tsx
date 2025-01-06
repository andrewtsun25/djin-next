import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

type ListItemButtonProps = React.ComponentProps<typeof ListItemButton>;

interface HyperLinkListItemProps extends ListItemButtonProps {
  icon: React.JSX.Element;
  text: string;
}

export const HyperLinkListItem: React.FC<HyperLinkListItemProps> = ({
  icon,
  text,
  ...listItemButtonProps
}: HyperLinkListItemProps) => {
  return (
    <ListItemButton {...listItemButtonProps}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
