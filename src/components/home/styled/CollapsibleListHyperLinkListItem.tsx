"use client";

import { styled } from "@mui/material/styles";

import { HyperLinkListItem } from "../drawer/HyperLinkListItem";

export const CollapsibleListHyperLinkListItem = styled(HyperLinkListItem)(
  ({ theme }) => ({
    paddingLeft: theme.spacing(6),
  }),
);

export default CollapsibleListHyperLinkListItem;
