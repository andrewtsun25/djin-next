import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const EducationPageTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.primary.contrastText,
  textAlign: "center",
}));

export default EducationPageTitle;
