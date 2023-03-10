import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const DesktopDrawerCloseButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingTop: theme.spacing(0.75),
  paddingRight: theme.spacing(1.5),
  paddingBottom: theme.spacing(0.75),
}));

export default DesktopDrawerCloseButtonContainer;
