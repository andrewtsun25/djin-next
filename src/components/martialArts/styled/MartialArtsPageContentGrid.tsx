import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const MartialArtsPageContentGrid = styled(Grid)(({ theme }) => ({
  whiteSpace: "pre-line",
  marginX: `auto`,
  marginY: theme.spacing(4),
}));

export default MartialArtsPageContentGrid;
