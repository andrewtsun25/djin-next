import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const scoresBackgroundUrl = `${Urls.AssetRoot}/music/bg/music_score_bg.jpeg`;

const ScoresBackground = styled(Box)(({ theme }) => ({
  backgroundSize: "cover",
  background: `url(${scoresBackgroundUrl}) no-repeat center center fixed`,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export default ScoresBackground;
