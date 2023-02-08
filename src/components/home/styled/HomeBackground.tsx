import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Urls } from "../../../const/url";

const homeBg = `${Urls.AssetRoot}/home/bg/dj_bg.jpg`;

const HomeBackground = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundSize: "cover",
  background: `url(${homeBg}) no-repeat center center fixed`,
});

export default HomeBackground;
