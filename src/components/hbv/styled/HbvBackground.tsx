import { Box, styled } from "@mui/material";
import { Urls } from "../../../const/url";

const HEP_B_JADE = "#308575";
const teamHbvBg = `${Urls.AssetRoot}/hbvResearch/bg/team_hbv_bg.png`;

const HbvBackground = styled(Box)({
  backgroundColor: HEP_B_JADE,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${teamHbvBg})`,
});

export default HbvBackground;
