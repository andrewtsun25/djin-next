import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import {
  HomeDescriptionTypography,
  HomeTitleTypography,
} from "../src/components/home";
import { ImageBackground } from "../src/components/layout";

// Background configuration
const bgUrl =
  "https://storage.googleapis.com/djin-dev.appspot.com/home/bg/dj_bg.jpeg";

export const metadata: Metadata = {
  title: "d.jin - Home",
};

export default function HomePage() {
  return (
    <>
      <ImageBackground src={bgUrl} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <HomeTitleTypography variant="h1">d.jin</HomeTitleTypography>
          <HomeDescriptionTypography variant="h4">
            Coder. DJ. Music Producer. Martial Artist.
          </HomeDescriptionTypography>
        </Box>
      </Box>
    </>
  );
}
