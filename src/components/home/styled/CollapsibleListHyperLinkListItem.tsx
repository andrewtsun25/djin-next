import HyperLinkListItem from "../drawer/HyperLinkListItem";
import { styled } from "@mui/material/styles";

const CollapsibleListHyperLinkListItem = styled(HyperLinkListItem)(
  ({ theme }) => ({
    paddingLeft: theme.spacing(6),
  })
);

export default CollapsibleListHyperLinkListItem;
