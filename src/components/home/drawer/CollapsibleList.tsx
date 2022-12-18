import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React, { PropsWithChildren, useState } from "react";

interface CollapsibleListPropsWithoutChildren {
  icon: JSX.Element;
  name: string;
}

type CollapsibleListProps =
  PropsWithChildren<CollapsibleListPropsWithoutChildren>;

export const LIST_ITEM_COLLAPSE_BTN_TEST_ID = "List Item Collapse Btn";
const CollapsibleList: React.FC<CollapsibleListProps> = ({
  icon,
  name,
  children,
}: CollapsibleListProps) => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const toggleIsListOpen = () =>
    setIsListOpen((newIsListOpen) => !newIsListOpen);
  return (
    <>
      <ListItemButton
        onClick={toggleIsListOpen}
        data-testid={LIST_ITEM_COLLAPSE_BTN_TEST_ID}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
        {isListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isListOpen} timeout="auto" unmountOnExit>
        <List>{children}</List>
      </Collapse>
    </>
  );
};

export default CollapsibleList;
