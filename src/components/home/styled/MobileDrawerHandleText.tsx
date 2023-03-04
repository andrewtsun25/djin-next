import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MobileDrawerHandleText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  textAlign: "center",
}));

export default MobileDrawerHandleText;
