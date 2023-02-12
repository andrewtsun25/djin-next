import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Urls } from "../../../const/url";

const employmentBackgroundUrl = `${Urls.AssetRoot}/employment/bg/office_bg.png`;

const EmploymentBackground = styled(Box)({
  background: `url(${employmentBackgroundUrl}) no-repeat center center fixed`,
  backgroundSize: "cover",
  minHeight: "100vh",
});

export default EmploymentBackground;
