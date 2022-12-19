import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const SkillChipContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "left",
  flexWrap: "wrap",
  "& > *": {
    margin: theme.spacing(0.5),
  },
}));

export default SkillChipContainer;
