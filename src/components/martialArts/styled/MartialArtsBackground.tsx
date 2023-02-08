import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Urls } from "../../../const/url";

const martialArtsBg = `${Urls.AssetRoot}/martialArts/bg/taeryong_studio_bg.png`;

const MartialArtsBackground = styled(Box)({
  backgroundSize: "cover",
  background: `url(${martialArtsBg}) no-repeat center center/100% fixed`,
  width: "100%",
  height: "100%",
});

export default MartialArtsBackground;
