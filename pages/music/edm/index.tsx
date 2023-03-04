import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";

import { EdmBackground, EdmTitle } from "../../../src/components/edm/styled";
import { SoundCloudWidget } from "../../../src/components/music";

const EDM_SOUND_CLOUD_PLAYLIST_URL =
  "https://api.soundcloud.com/playlists/545171379";

const WIDGET_HEIGHT = 800;

const EdmPage = () => {
  return (
    <>
      <Head>
        <title>d.jin - EDM Tracks</title>
      </Head>
      <EdmBackground>
        <Container maxWidth="lg">
          <EdmTitle variant="h2">EDM Tracks</EdmTitle>
          <SoundCloudWidget
            url={EDM_SOUND_CLOUD_PLAYLIST_URL}
            style={{ height: WIDGET_HEIGHT, borderRadius: 10 }}
          />
        </Container>
      </EdmBackground>
    </>
  );
};

export default EdmPage;
