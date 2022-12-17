import Head from 'next/head'
import {Box, Typography} from "@mui/material";
import {Urls} from "../src/const/url";

const homeBg = `${Urls.AssetRoot}/home/bg/dj_bg.jpg`;
export default function Home() {
  return (
    <>
      <Head>
        <title>d.jin - Home</title>
      </Head>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" sx={{
        backgroundImage: `url(${homeBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography variant="h1">d.jin</Typography>
          <Typography variant="h4" mt={2}>Coder. DJ. Music Producer. Martial Artist.</Typography>
        </Box>
      </Box>
    </>
  )
}
