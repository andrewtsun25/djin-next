import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const edmBg = `${Urls.AssetRoot}/music/bg/edc_bg.jpg`;

const EdmBackground = styled(Box)(({ theme }) => ({
  background: `url(${edmBg}) no-repeat center center fixed`,
  backgroundSize: "cover",
  padding: theme.spacing(4),
  minHeight: "100vh",
}));

export default EdmBackground;