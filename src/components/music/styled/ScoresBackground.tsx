import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const scoresBackgroundUrl = `${Urls.AssetRoot}/music/bg/music_score_bg.jpeg`;

const ScoresBackground = styled(Box)(({ theme }) => ({
  background: `url(${scoresBackgroundUrl}) no-repeat center center fixed`,
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  minHeight: "100%",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export default ScoresBackground;
