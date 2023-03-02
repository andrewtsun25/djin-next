import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const HbvPageContentContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

export default HbvPageContentContainer;
