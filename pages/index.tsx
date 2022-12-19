import Head from "next/head";
import { Typography } from "@mui/material";
import { HomeBackground, HomeTextContainer } from "../src/components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>d.jin - Home</title>
      </Head>
      <HomeBackground>
        <HomeTextContainer>
          <Typography variant="h1">d.jin</Typography>
          <Typography variant="h4" mt={2}>
            Coder. DJ. Music Producer. Martial Artist.
          </Typography>
        </HomeTextContainer>
      </HomeBackground>
    </>
  );
}
