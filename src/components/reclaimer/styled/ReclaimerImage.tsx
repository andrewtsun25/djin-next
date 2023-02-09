import Image from "next/image";
import { styled } from "@mui/material/styles";

const ReclaimerImage = styled(Image)(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  padding: theme.spacing(2),
  margin: "10px auto",
  border: "3px solid #ba4ef8",
  borderRadius: 10,
}));

export default ReclaimerImage;
