import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const codingEducationBackgroundUrl = `${Urls.AssetRoot}/education/bg/hogwarts_bg.jpg`;

const CodingEducationBackground = styled(Box)(({ theme }) => ({
  background: `url(${codingEducationBackgroundUrl}) no-repeat center center fixed`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  padding: theme.spacing(2),
}));

export default CodingEducationBackground;
