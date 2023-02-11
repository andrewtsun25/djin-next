import { GetStaticProps, InferGetStaticPropsType } from "next";
import { listMusicScores } from "../../../src/dal/api";
import { MusicInstrument, MusicScore } from "../../../src/types/api";
import Head from "next/head";
import { alpha, Container, useMediaQuery } from "@mui/material";
import React from "react";
import {
  ScoresBackground,
  ScoresTitle,
} from "../../../src/components/music/styled";
import { MusicInstrumentTile } from "../../../src/components/music";
import { useTheme } from "@mui/system";
import { ResponsiveGrid } from "../../../src/components/responsiveGrid";

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
        <title>Music Scores</title>
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
                borderRadius: 2,
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
