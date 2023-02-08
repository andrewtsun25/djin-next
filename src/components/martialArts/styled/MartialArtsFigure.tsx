import { styled } from "@mui/material/styles";

const MartialArtsFigure = styled("figure")(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export default MartialArtsFigure;
