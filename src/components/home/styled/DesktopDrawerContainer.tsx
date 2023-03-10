import { SwipeableDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";

export const appDrawerWidth = 400;

const DesktopDrawerContainer = styled(SwipeableDrawer)({
  width: appDrawerWidth,
  flexShrink: 0,
});

export default DesktopDrawerContainer;
