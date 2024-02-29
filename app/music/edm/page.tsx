import { Container } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import { EdmBackground, EdmTitle } from "../../../src/components/edm/styled";
import { SoundCloudWidget } from "../../../src/components/music";

const EDM_SOUND_CLOUD_PLAYLIST_URL =
  "https://api.soundcloud.com/playlists/545171379";

const WIDGET_HEIGHT = 800;

export const metadata: Metadata = {
  title: "d.jin - EDM Tracks",
};

export default function EdmPage(): React.JSX.Element {
  return (
    <EdmBackground>
      <Container maxWidth="lg">
        <EdmTitle variant="h2">EDM Tracks</EdmTitle>
        <SoundCloudWidget
          url={EDM_SOUND_CLOUD_PLAYLIST_URL}
          style={{ height: WIDGET_HEIGHT, borderRadius: 10 }}
        />
      </Container>
    </EdmBackground>
  );
}
