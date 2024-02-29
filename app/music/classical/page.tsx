import { Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import { ImageBackground, PageContainer } from "../../../src/components/layout";
import { MusicInstrumentTile } from "../../../src/components/music";
import { ResponsiveGrid } from "../../../src/components/responsiveGrid";
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
        <Typography variant="h3" mb={2} textAlign="center">
          Music Scores
        </Typography>
        {scores.map(({ name, trackUrl, musicInstruments }: MusicScore) => (
          <ResponsiveGrid
            title={name}
            embedUrl={trackUrl}
            sx={{
              backgroundColor: "rgba(255, 255, 255, .75)",
              padding: 2,
              borderRadius: 5,
              "&:not(:first-child)": {
                mt: 2,
              },
              "&:not(:last-child)": {
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
        ))}
      </PageContainer>
    </>
  );
}
