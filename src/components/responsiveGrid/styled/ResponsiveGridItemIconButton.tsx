import { alpha, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ResponsiveGridItemIconButton = styled(IconButton)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.54),
}));
