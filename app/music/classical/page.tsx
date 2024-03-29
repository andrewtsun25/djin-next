import { Metadata } from "next";
import React from "react";

import { ImageBackground, PageContainer } from "../../../src/components/layout";
import { MusicInstrumentTile } from "../../../src/components/music";
import { ResponsiveGrid } from "../../../src/components/responsiveGrid";
import { Title } from "../../../src/components/text";
import { listMusicScores } from "../../../src/dal/api";
import { MusicInstrument, MusicScore } from "../../../src/types/api";

const bgUrl =
  "https://storage.googleapis.com/djin-dev.appspot.com/music/bg/music_score_bg.jpeg";

export const metadata: Metadata = {
  title: "d.jin - Music Scores",
};

export default async function ScoresPage(): Promise<React.JSX.Element> {
  const scores: MusicScore[] = await listMusicScores();
  return (
    <>
      <ImageBackground src={bgUrl} />
      <PageContainer>
        <Title variant="h3" mb={2}>
          Music Scores
        </Title>
        {scores.length > 0 &&
          scores.map(({ name, trackUrl, musicInstruments }: MusicScore) =>
            musicInstruments.length < 1 ? null : (
              <ResponsiveGrid
                title={name}
                embedUrl={trackUrl}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, .75)",
                  padding: 2,
                  borderRadius: 5,
                  "&:not(:first-of-type)": {
                    mt: 2,
                  },
                  "&:not(:last-of-type)": {
                    mb: 2,
                  },
                  marginBlockStart: 0,
                  marginBlockEnd: 0,
                }}
                key={name}
              >
                {musicInstruments.map((instrument: MusicInstrument) => (
                  <MusicInstrumentTile
                    musicInstrument={instrument}
                    key={instrument.type}
                  />
                ))}
              </ResponsiveGrid>
            ),
          )}
      </PageContainer>
    </>
  );
}
