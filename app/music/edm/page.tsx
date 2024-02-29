import { Metadata } from "next";
import React from "react";

import { EdmPageContent, EdmTitle } from "../../../src/components/edm/styled";
import { Background } from "../../../src/components/image";
import { SoundCloudWidget } from "../../../src/components/music";

const bgUrl =
  "https://storage.googleapis.com/djin-dev.appspot.com/education/bg/pioneer_cdj_bg.jpeg";
const soundCloudEdmPlaylistUrl: string =
  "https://api.soundcloud.com/playlists/545171379";
const widgetHeight: number = 800;

export const metadata: Metadata = {
  title: "d.jin - EDM Tracks",
};

// url: https://storage.googleapis.com/djin-dev.appspot.com/education/bg/pioneer_cdj_bg.jpeg
// 2560 w
// 1440 h

export default function EdmPage(): React.JSX.Element {
  return (
    <>
      <Background src={bgUrl} alt="EDM Background" height={1440} width={2560} />
      <EdmPageContent>
        <EdmTitle variant="h2">EDM Tracks</EdmTitle>
        <SoundCloudWidget
          url={soundCloudEdmPlaylistUrl}
          style={{ height: widgetHeight, borderRadius: 10 }}
        />
      </EdmPageContent>
    </>
  );
}
