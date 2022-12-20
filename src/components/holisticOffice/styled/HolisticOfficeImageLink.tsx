import { styled } from "@mui/material/styles";
import Link from "next/link";

const HolisticOfficeImageLink = styled(Link)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

export default HolisticOfficeImageLink;
