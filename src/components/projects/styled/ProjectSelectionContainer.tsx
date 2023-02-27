import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProjectSelectionContainer = styled(Box)(({ theme }) => ({
  borderRadius: 10,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  alignItems: "center",
  justifyContent: "center",
}));

export default ProjectSelectionContainer;
