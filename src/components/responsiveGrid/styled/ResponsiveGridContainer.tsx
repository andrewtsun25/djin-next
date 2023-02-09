import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ResponsiveGridContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: "100vw",
}));

export default ResponsiveGridContainer;
