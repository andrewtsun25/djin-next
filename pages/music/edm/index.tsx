import Head from "next/head";
import { Container } from "@mui/material";
import React from "react";
import { SoundCloudWidget } from "../../../src/components/music";
import { EdmBackground, EdmTitle } from "../../../src/components/edm/styled";

const EDM_SOUND_CLOUD_PLAYLIST_URL =
  "https://api.soundcloud.com/playlists/545171379";

const EdmPage = () => {
  return (
    <>
      <Head>
        <title>d.jin - EDM Tracks</title>
      </Head>
      <EdmBackground>
        <Container maxWidth="lg">
          <EdmTitle variant="h2">EDM Tracks</EdmTitle>
          <SoundCloudWidget url={EDM_SOUND_CLOUD_PLAYLIST_URL} height={800} />
        </Container>
      </EdmBackground>
    </>
  );
};

export default EdmPage;
