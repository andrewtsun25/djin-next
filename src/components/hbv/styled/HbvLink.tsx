import { styled } from "@mui/material";
import Link from "next/link";

const HbvLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export default HbvLink;
