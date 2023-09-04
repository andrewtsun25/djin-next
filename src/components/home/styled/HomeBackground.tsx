import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const homeBg = `${Urls.AssetRoot}/home/bg/dj_bg.jpeg`;

/**
 * Uses tricks here to perfectly center background: https://css-tricks.com/perfect-full-page-background-image/
 */
const HomeBackground = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: `url(${homeBg}) black no-repeat center center fixed`,
});

export default HomeBackground;
