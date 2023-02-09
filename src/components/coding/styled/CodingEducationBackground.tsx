import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Urls } from "../../../const/url";

const codingEducationBgUrl = `${Urls.AssetRoot}/education/bg/usc_bg.jpg`;

const CodingEducationBackground = styled(Box)({
  backgroundSize: "cover",
  background: `url(${codingEducationBgUrl}) no-repeat center center/110% fixed`,
  width: "100%",
  height: "100%",
  padding: 2,
});

export default CodingEducationBackground;
