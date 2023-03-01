import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MartialArtsPageTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  textAlign: "center",
}));

export default MartialArtsPageTitle;
