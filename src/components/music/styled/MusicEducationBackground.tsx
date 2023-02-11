import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Urls } from "../../../const/url";

const musicEducationBackgroundUrl = `${Urls.AssetRoot}/education/bg/pbla_bg.jpg`;

const MusicEducationBackground = styled(Box)({
  backgroundSize: "cover",
  background: `url(${musicEducationBackgroundUrl}) no-repeat center center fixed`,
  height: "100vh",
});

export default MusicEducationBackground;
