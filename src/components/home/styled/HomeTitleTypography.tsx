import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const HomeTitleTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.contrastText,
}));

export default HomeTitleTypography;
