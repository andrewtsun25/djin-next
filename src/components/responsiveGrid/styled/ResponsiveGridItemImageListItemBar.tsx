import { ImageListItemBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ResponsiveGridItemImageListItemBar = styled(ImageListItemBar)({
  borderRadius: "0 0 10px 10px",
  ".MuiImageListItemBar-title": {
    textAlign: "left",
  },
  ".MuiImageListItemBar-subtitle": {
    textAlign: "left",
  },
});

export default ResponsiveGridItemImageListItemBar;
