import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const musicEducationBackgroundUrl = `${Urls.AssetRoot}/education/bg/pioneer_cdj_bg.jpeg`;

const MusicEducationBackground = styled(Box)({
  background: `url(${musicEducationBackgroundUrl}) no-repeat center center fixed`,
  backgroundSize: "cover",
  minHeight: "100vh",
});

export default MusicEducationBackground;