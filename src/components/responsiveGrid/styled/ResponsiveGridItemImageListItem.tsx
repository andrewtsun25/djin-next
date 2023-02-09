import { ImageListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const ResponsiveGridItemImageListItem = styled(ImageListItem)(({ theme }) => ({
  ":before": {
    gridArea: "1 / 1 / 2 / 2",
    content: `""`,
    paddingBottom: "100%",
    display: "block",
  },
  background: "white",
  padding: theme.spacing(1),
}));

export default ResponsiveGridItemImageListItem;
