import { Metadata } from "next";

import { HomeBackground, HomeTextContainer } from "../src/components/home";
import {
  HomeDescriptionTypography,
  HomeTitleTypography,
} from "../src/components/home/styled";

export const metadata: Metadata = {
  title: "d.jin - Home",
};

export default function HomePage() {
  return (
    <HomeBackground>
      <HomeTextContainer>
        <HomeTitleTypography variant="h1">d.jin</HomeTitleTypography>
        <HomeDescriptionTypography variant="h4">
          Coder. DJ. Music Producer. Martial Artist.
        </HomeDescriptionTypography>
      </HomeTextContainer>
    </HomeBackground>
  );
}
