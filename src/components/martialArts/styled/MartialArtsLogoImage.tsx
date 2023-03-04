import { styled } from "@mui/material/styles";
import Image from "next/image";

const MartialArtsLogoImage = styled(Image)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  maxWidth: 200,
  height: "auto",
}));

export default MartialArtsLogoImage;
