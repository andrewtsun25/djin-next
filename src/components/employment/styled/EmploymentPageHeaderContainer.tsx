import { alpha, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const EmploymentPageHeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: alpha("#fff", 0.75),
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: 10,
}));

export default EmploymentPageHeaderContainer;
