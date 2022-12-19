import { styled, Typography } from "@mui/material";

const HbvItalicizedTypography = styled(Typography)(({ theme }) => ({
  margin: "20px auto",
  fontStyle: "italic",
  color: theme.palette.primary.contrastText,
}));

export default HbvItalicizedTypography;
