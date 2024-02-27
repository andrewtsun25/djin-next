import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { PropsWithChildren, useState } from "react";

interface CollapsibleListPropsWithoutChildren {
  icon: React.JSX.Element;
  name: string;
}

type CollapsibleListPagesProps =
  PropsWithChildren<CollapsibleListPropsWithoutChildren>;

export const LIST_ITEM_COLLAPSE_BTN_TEST_ID = "List Item Collapse Btn";
const CollapsibleListPages: React.FC<CollapsibleListPagesProps> = ({
  icon,
  name,
  children,
}: CollapsibleListPagesProps) => {
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

export default CollapsibleListPages;
