import { Box, styled } from "@mui/material";
import { Urls } from "../../../const/url";

const HEP_B_JADE = "#308575";
const teamHbvBg = `${Urls.AssetRoot}/hbvResearch/bg/team_hbv_bg.png`;

const HbvBackground = styled(Box)({
  backgroundSize: "cover",
  background: `url(${teamHbvBg}) ${HEP_B_JADE} no-repeat center center/70% fixed`,
});

export default HbvBackground;
