import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Urls } from "../../../const/url";

const martialArtsBg = `${Urls.AssetRoot}/martialArts/bg/taeryong_studio_bg.png`;

const MartialArtsBackground = styled(Box)({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${martialArtsBg})`,
});

export default MartialArtsBackground;
