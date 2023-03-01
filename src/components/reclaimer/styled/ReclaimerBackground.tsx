import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const reclaimerBg = `${Urls.AssetRoot}/reclaimer/bg/reclaimer_bg.png`;

const LIGHT_PURPLE = "#bba0d9";

const ReclaimerBackground = styled(Box)(({ theme }) => ({
  background: `url(${reclaimerBg}) no-repeat center center fixed`,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  color: LIGHT_PURPLE,
}));

export default ReclaimerBackground;
