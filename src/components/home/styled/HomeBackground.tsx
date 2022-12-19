import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Urls } from "../../../const/url";

const homeBg = `${Urls.AssetRoot}/home/bg/dj_bg.jpg`;

const HomeBackground = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${homeBg})`,
});

export default HomeBackground;
