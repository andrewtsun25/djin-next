import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const HomeLinkText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  marginLeft: theme.spacing(1.5),
  "&:hover": {
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightBold,
  },
  "&:active": {
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightBold,
  },
  "&:visited": {
    color: theme.palette.primary.contrastText,
  },
}));

export default HomeLinkText;
