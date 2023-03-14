import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const employmentBackgroundUrl = `${Urls.AssetRoot}/employment/bg/anduril_office.png`;

const EmploymentBackground = styled(Box)({
  background: `url(${employmentBackgroundUrl}) no-repeat center center fixed`,
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  minHeight: "100vh",
});

export default EmploymentBackground;
