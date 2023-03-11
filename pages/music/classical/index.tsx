import { alpha, Container, useMediaQuery, useTheme } from "@mui/material";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

import { MusicInstrumentTile } from "../../../src/components/music";
import {
  ScoresBackground,
  ScoresTitle,
} from "../../../src/components/music/styled";
import { ResponsiveGrid } from "../../../src/components/responsiveGrid";
import { listMusicScores } from "../../../src/dal/api";
import { MusicInstrument, MusicScore } from "../../../src/types/api";

interface ScoresPageProps {
  scores: MusicScore[];
}

export const getStaticProps: GetStaticProps<ScoresPageProps> = async () => {
  const scores = await listMusicScores();
  return {
    props: {
      scores,
    },
  };
};

type ScoresNextPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const renderMusicInstrumentTile = (instrument: MusicInstrument) => (
  <MusicInstrumentTile musicInstrument={instrument} key={instrument.type} />
);
const ScoresPage = ({ scores }: ScoresNextPageProps) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Head>
        <title>d.jin - Music Scores</title>
      </Head>
      <ScoresBackground>
        <Container maxWidth="lg">
          <ScoresTitle variant={isSmall ? "h3" : "h2"}>
            Music Scores
          </ScoresTitle>
          {scores.map(({ name, trackUrl, musicInstruments }: MusicScore) => (
            <ResponsiveGrid
              title={name}
              embedUrl={trackUrl}
              items={musicInstruments}
              renderGridTile={renderMusicInstrumentTile}
              sx={{
                backgroundColor: alpha("#fff", 0.75),
                padding: 2,
                borderRadius: 10,
                margin: `20px auto`,
              }}
              key={name}
            />
          ))}
        </Container>
      </ScoresBackground>
    </>
  );
};

export default ScoresPage;
