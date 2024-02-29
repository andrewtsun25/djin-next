import { Container } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import { MusicInstrumentTile } from "../../../src/components/music";
import {
  ScoresBackground,
  ScoresTitle,
} from "../../../src/components/music/styled";
import { ResponsiveGrid } from "../../../src/components/responsiveGrid";
import { listMusicScores } from "../../../src/dal/api";
import { MusicInstrument, MusicScore } from "../../../src/types/api";

export const metadata: Metadata = {
  title: "d.jin - Music Scores",
};

export default async function ScoresPage(): Promise<React.JSX.Element> {
  const scores: MusicScore[] = await listMusicScores();
  return (
    <ScoresBackground>
      <Container maxWidth="lg">
        <ScoresTitle variant="h3">Music Scores</ScoresTitle>
        {scores.map(({ name, trackUrl, musicInstruments }: MusicScore) => (
          <ResponsiveGrid
            title={name}
            embedUrl={trackUrl}
            sx={{
              backgroundColor: "rgba(255, 255, 255, .75)",
              padding: 2,
              borderRadius: 10,
              margin: `20px auto`,
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
      </Container>
    </ScoresBackground>
  );
}
