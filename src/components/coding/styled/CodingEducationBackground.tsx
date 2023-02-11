import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Urls } from "../../../const/url";

const codingEducationBackgroundUrl = `${Urls.AssetRoot}/education/bg/usc_bg.jpg`;

const CodingEducationBackground = styled(Box)(({ theme }) => ({
  backgroundSize: "cover",
  background: `url(${codingEducationBackgroundUrl}) no-repeat center center/110% fixed`,
  width: "100%",
  height: "100%",
  padding: theme.spacing(2),
}));

export default CodingEducationBackground;
