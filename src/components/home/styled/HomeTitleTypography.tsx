import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const HomeTitleTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.contrastText,
}));

export default HomeTitleTypography;
