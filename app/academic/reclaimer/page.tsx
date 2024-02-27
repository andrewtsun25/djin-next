import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ShopIcon from "@mui/icons-material/Shop";
import WebIcon from "@mui/icons-material/Web";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Container, Fade, Grid, Grow, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

import {
  ReclaimerBackground,
  ReclaimerCenteredGrid,
  ReclaimerCenteringContainer,
  ReclaimerIconLink,
  ReclaimerImage,
  ReclaimerLink,
  ReclaimerPlayIconLink,
  ReclaimerTitle,
} from "../../../src/components/reclaimer/styled";
import { Urls } from "../../../src/const/url";

const gameImg = `${Urls.AssetRoot}/reclaimer/img/reclaimer_game.png`;
const reclaimerWebsite = "https://alextomkow.itch.io/reclaimer";

export default function ReclaimerPage() {
  return (
    <>
      <Head>
        <title>d.jin Reclaimer</title>
      </Head>
      <ReclaimerBackground>
        <Fade in>
          <Container maxWidth="lg">
            <ReclaimerTitle variant="h2">Reclaimer</ReclaimerTitle>
            <Grow in>
              <ReclaimerCenteringContainer>
                <ReclaimerImage
                  src={gameImg}
                  alt="Reclaimer Game Image"
                  width={1000}
                  height={562}
                />
              </ReclaimerCenteringContainer>
            </Grow>
            <ReclaimerCenteringContainer>
              <ReclaimerPlayIconLink
                href="https://play.google.com/store/apps/details?id=com.RedPandaStudios.Reclaimer"
                text="Play Reclaimer Now on Android"
                icon={<ShopIcon />}
              />
            </ReclaimerCenteringContainer>
            <Typography paragraph>
              <ReclaimerLink
                href={reclaimerWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reclaimer
              </ReclaimerLink>{" "}
              is a mobile game developed on Unity in C#, playable on both
              Android and iOS. The game was developed for an elective course,
              CSCI-599: Mobile Social Games, at USC from January 2020 to May
              2020. Players start in a jail cell and have to escape the dungeon.
              Along the way, they can pick up weapons and items in the
              environment, and fight medieval enemies that stand in the way of
              their escape.
            </Typography>
            <Typography paragraph>
              Fighting takes place with Infinity Blade-style combat. Players can
              attack in 4 directions using single-finger swipes. Every so often,
              an enemy’s attack will be signaled by arrows on screen. Blocking
              is accomplished by swiping with two fingers in the direction of
              the arrows. Failure to do so results in getting hit. Players are
              rewarded to respond quickly; “perfect” blocks on-time result in a
              powerful counterattack dealt to the enemy.
            </Typography>
            <Typography paragraph>
              Players can get coins from the environment, opening chests, and
              defeating enemies. These coins can be traded for stronger items in
              the dungeon’s shop.
            </Typography>
            <Typography paragraph>
              My role on the team is the data analyst. For every event worth
              tracking (fighting enemies, combat techniques, item purchases and
              usage, etc.), I created analytics hooks to funnel Unity Analytics
              events into a dashboard. From these events, I delivered weekly
              reports detailing user activity in-game, providing evidence-based
              feedback to class professors and the rest of my development team
              on new features to develop, or existing features to re-adjust.
            </Typography>
            <Typography paragraph>
              Media-wise, I also helped develop the video used in the trailer
              and composed the music for the soundtrack. I also helped manage
              app publishing to the Google Play Services.
            </Typography>
            <Grid container spacing={2}>
              <ReclaimerCenteredGrid item xs={12} sm={6} md={4} lg={2}>
                <ReclaimerIconLink
                  href={reclaimerWebsite}
                  text="Official Game Site"
                  icon={<WebIcon />}
                  target="_blank"
                />
              </ReclaimerCenteredGrid>
              <ReclaimerCenteredGrid item xs={12} sm={6} md={4} lg={2}>
                <ReclaimerIconLink
                  href="https://docs.google.com/document/d/1kCaNgljvQoYSivE1K8k4781hS_qSFREjGe788UiPb6M/edit"
                  text="Game Design Doc"
                  icon={<DescriptionIcon />}
                  target="_blank"
                />
              </ReclaimerCenteredGrid>
              <ReclaimerCenteredGrid item xs={12} sm={6} md={4} lg={2}>
                <ReclaimerIconLink
                  href="https://soundcloud.com/djtaeyong/sets/reclaimer-ost"
                  text="Reclaimer OST"
                  icon={<MusicNoteIcon />}
                  target="_blank"
                />
              </ReclaimerCenteredGrid>
              <ReclaimerCenteredGrid item xs={12} sm={6} lg={2}>
                <ReclaimerIconLink
                  href="https://www.youtube.com/watch?v=iCcWpw9RU9g"
                  text="Trailer"
                  icon={<YouTubeIcon />}
                  target="_blank"
                />
              </ReclaimerCenteredGrid>
              <ReclaimerCenteredGrid item xs={12} sm={6} lg={2}>
                <ReclaimerIconLink
                  href="https://play.google.com/store/apps/details?id=com.RedPandaStudios.Reclaimer"
                  text="Source Code"
                  icon={<GitHubIcon />}
                  target="_blank"
                />
              </ReclaimerCenteredGrid>
            </Grid>
          </Container>
        </Fade>
      </ReclaimerBackground>
    </>
  );
}
