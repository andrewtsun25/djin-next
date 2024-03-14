"use client";

import { styled } from "@mui/material/styles";

import { Title } from "../../text";

export const EdmTitle = styled(Title)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.contrastText,
}));

export default EdmTitle;
