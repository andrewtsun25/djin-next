import { Metadata } from "next";
import React from "react";

import { EdmTitle } from "../../../src/components/edm/styled";
import { ImageBackground, PageContainer } from "../../../src/components/layout";
import { SoundCloudWidget } from "../../../src/components/music";

const bgUrl =
  "https://storage.googleapis.com/djin-dev.appspot.com/music/bg/edc_bg.jpg";
const soundCloudEdmPlaylistUrl: string =
  "https://api.soundcloud.com/playlists/545171379";
const widgetHeight: number = 800;

export const metadata: Metadata = {
  title: "d.jin - EDM Tracks",
};

export default function EdmPage(): React.JSX.Element {
  return (
    <>
      <ImageBackground src={bgUrl} />
      <PageContainer>
        <EdmTitle variant="h2">EDM Tracks</EdmTitle>
        <SoundCloudWidget
          url={soundCloudEdmPlaylistUrl}
          style={{ height: widgetHeight }}
        />
      </PageContainer>
    </>
  );
}
