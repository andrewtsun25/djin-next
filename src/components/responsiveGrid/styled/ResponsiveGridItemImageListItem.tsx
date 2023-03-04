import { ImageListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Uses tricks in this article to accomplish perfect logo centering in perfect squares: https://css-tricks.com/a-grid-of-logos-in-squares/
 */
const ResponsiveGridItemImageListItem = styled(ImageListItem)(({ theme }) => ({
  ":before": {
    gridArea: "1 / 1 / 2 / 2",
    content: `""`,
    paddingBottom: "100%",
    display: "block",
    borderRadius: 10,
  },
  background: "white",
  padding: theme.spacing(1),
  borderRadius: 15,
  overflow: "hidden",
}));

export default ResponsiveGridItemImageListItem;
