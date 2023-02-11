import { styled } from "@mui/material/styles";
import { ResponsiveGrid } from "../../responsiveGrid";
import { alpha } from "@mui/material";

const ScoresResponsiveGrid = styled(ResponsiveGrid)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.75),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  margin: `20px auto`,
}));

export default ScoresResponsiveGrid;
