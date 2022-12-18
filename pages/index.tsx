import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { Urls } from "../src/const/url";
import styles from "./index.module.scss";

const homeBg = `${Urls.AssetRoot}/home/bg/dj_bg.jpg`;
export default function Home() {
  return (
    <>
      <Head>
        <title>d.jin - Home</title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundImage: `url(${homeBg})`,
        }}
        className={styles.background}
      >
        <Box className={styles.textContainer}>
          <Typography variant="h1">d.jin</Typography>
          <Typography variant="h4" mt={2}>
            Coder. DJ. Music Producer. Martial Artist.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
