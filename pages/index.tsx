import Head from "next/head";
import { HomeBackground, HomeTextContainer } from "../src/components/home";
import {
  HomeDescriptionTypography,
  HomeTitleTypography,
} from "../src/components/home/styled";

export default function Home() {
  return (
    <>
      <Head>
        <title>d.jin - Home</title>
      </Head>
      <HomeBackground>
        <HomeTextContainer>
          <HomeTitleTypography variant="h1">d.jin</HomeTitleTypography>
          <HomeDescriptionTypography variant="h4">
            Coder. DJ. Music Producer. Martial Artist.
          </HomeDescriptionTypography>
        </HomeTextContainer>
      </HomeBackground>
    </>
  );
}
