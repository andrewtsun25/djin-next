import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import { HomeTextContainer } from "../src/components/home";
import {
  HomeDescriptionTypography,
  HomeTitleTypography,
} from "../src/components/home/styled";
import { Background } from "../src/components/layout";

// Background configuration
const bgUrl =
  "https://storage.googleapis.com/djin-dev.appspot.com/home/bg/dj_bg.jpeg";
const bgAlt = "Home Page Background";
const bgHeight = 1200;
const bgWidth = 1920;

export const metadata: Metadata = {
  title: "d.jin - Home",
};

export default function HomePage() {
  return (
    <>
      <Background src={bgUrl} alt={bgAlt} height={bgHeight} width={bgWidth} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        height="100vh"
        width="100vw"
      >
        <HomeTextContainer>
          <HomeTitleTypography variant="h1">d.jin</HomeTitleTypography>
          <HomeDescriptionTypography variant="h4">
            Coder. DJ. Music Producer. Martial Artist.
          </HomeDescriptionTypography>
        </HomeTextContainer>
      </Box>
    </>
  );
}
