import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const projectsBackgroundUrl = `${Urls.AssetRoot}/projects/bg/matrix_bg.png`;

const ProjectsBackground = styled(Box)(({ theme }) => ({
  background: `url(${projectsBackgroundUrl}) no-repeat center center fixed`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  padding: theme.spacing(2),
  minHeight: "100vh",
}));

export default ProjectsBackground;
