import { styled } from "@mui/material/styles";

import HyperLinkListItem from "../drawer/HyperLinkListItem";

const CollapsibleListHyperLinkListItem = styled(HyperLinkListItem)(
  ({ theme }) => ({
    paddingLeft: theme.spacing(6),
  })
);

export default CollapsibleListHyperLinkListItem;
