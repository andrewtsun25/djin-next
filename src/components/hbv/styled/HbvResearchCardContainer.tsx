import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const HbvResearchCardContainer = styled(Card)(({ theme }) => ({
  marginX: "auto",
  marginY: theme.spacing(1),
  padding: theme.spacing(2),
}));

export default HbvResearchCardContainer;
