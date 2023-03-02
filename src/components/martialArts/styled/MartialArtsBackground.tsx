import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const martialArtsBg = `${Urls.AssetRoot}/martialArts/bg/mma_cage_bg.jpg`;

const MartialArtsBackground = styled(Box)({
  background: `url(${martialArtsBg}) no-repeat center center fixed`,
  backgroundSize: "cover",
});

export default MartialArtsBackground;
