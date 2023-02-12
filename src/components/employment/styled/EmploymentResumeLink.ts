import Link from "next/link";
import { styled } from "@mui/material/styles";

const EmploymentResumeLink = styled(Link)(({ theme }) => ({
  textDecoration: "underline",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));

export default EmploymentResumeLink;
