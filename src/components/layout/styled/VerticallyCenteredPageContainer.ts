"use client";

import { styled } from "@mui/material/styles";

import { PageContainer } from "./PageContainer";

export const VerticallyCenteredPageContainer = styled(PageContainer)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
