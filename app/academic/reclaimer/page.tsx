import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import WebIcon from "@mui/icons-material/Web";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Fade, Grid, Grow, Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import {
  ImageBackground,
  VerticallyCenteredPageContainer,
} from "../../../src/components/layout";
import { ReclaimerImage } from "../../../src/components/reclaimer";
import { IconLink, MuiNextLink, Title } from "../../../src/components/text";
import { Urls } from "../../../src/const/url";

const bgUrl: string = `${Urls.AssetRoot}/reclaimer/bg/reclaimer_bg.png`;
const lightPurple: string = "#bba0d9";

const gameImg: string = `${Urls.AssetRoot}/reclaimer/img/reclaimer_game.png`;
const reclaimerWebsite: string = "https://alextomkow.itch.io/reclaimer";

export const metadata: Metadata = {
  title: "d.jin - Reclaimer",
};

export default function ReclaimerPage(): React.JSX.Element {
  return (
    <>
      <ImageBackground src={bgUrl} />
      <Fade in>
        <VerticallyCenteredPageContainer sx={{ color: lightPurple }}>
          <Title variant="h2">Reclaimer</Title>
          <Grow in>
            <ReclaimerImage
              src={gameImg}
              alt="Reclaimer Game Image"
              width={1000}
              height={562}
            />
          </Grow>
          <Typography paragraph fontWeight="bold">
            Update: Reclaimer is no longer accessible for Android on the Google
            Play Store due to the absence of ongoing development efforts.
          </Typography>
          <Typography paragraph sx={{ alignSelf: "flex-start" }}>
            <MuiNextLink
              href={reclaimerWebsite}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#ba4ef8" }}
            >
              Reclaimer
            </MuiNextLink>{" "}
            is a mobile game built on Unity in C#, compatible with both Android
            and iOS platforms. The game was created as part of an elective
            course, CSCI-599: Mobile Social Games, at USC, spanning from January
            2020 to May 2020. Players commence in a jail cell and must navigate
            through the dungeon to escape. Along the journey, they can collect
            weapons and items scattered in the environment, engaging in combat
            with medieval adversaries hindering their progress.
          </Typography>
          <Typography paragraph sx={{ alignSelf: "flex-start" }}>
            Combat mechanics are reminiscent of Infinity Blade-style gameplay.
            Players execute attacks in four directions through single-finger
            swipes. Periodically, enemy attacks are indicated by arrows
            appearing on the screen. Blocking is performed by swiping with two
            fingers in the direction of the arrows, with failure resulting in
            taking damage. Players are incentivized to react promptly; timely
            &ldquo;perfect&rdquo; blocks trigger potent counterattacks against
            foes.
          </Typography>
          <Typography paragraph sx={{ alignSelf: "flex-start" }}>
            Coins can be acquired by exploring the environment, opening chests,
            and defeating enemies. These coins are then utilized to purchase
            stronger items from the dungeon&apos;s shop.
          </Typography>
          <Typography paragraph sx={{ alignSelf: "flex-start" }}>
            My role within the team is that of a data analyst. I implemented
            analytics hooks for various in-game events (such as combat
            encounters, combat maneuvers, item transactions, etc.) to channel
            Unity Analytics events into a dashboard. Based on the insights
            derived from these events, I compiled weekly reports outlining user
            activity within the game, furnishing evidence-based feedback to both
            class instructors and my development team regarding potential new
            features to implement or existing features to refine.
          </Typography>
          <Typography paragraph sx={{ alignSelf: "flex-start" }}>
            Moreover, I contributed to the multimedia aspects of the project by
            assisting in the development of the video used in the trailer and
            composing the music for the soundtrack. Additionally, I aided in
            managing the app publishing process to Google Play Services.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <IconLink
                href={reclaimerWebsite}
                text="Official Game Site"
                icon={<WebIcon />}
                target="_blank"
                sx={{ color: "#ba4ef8" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <IconLink
                href="https://docs.google.com/document/d/1kCaNgljvQoYSivE1K8k4781hS_qSFREjGe788UiPb6M/edit"
                text="Game Design Doc"
                icon={<DescriptionIcon />}
                target="_blank"
                sx={{ color: "#ba4ef8" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <IconLink
                href="https://soundcloud.com/djtaeyong/sets/reclaimer-ost"
                text="Reclaimer OST"
                icon={<MusicNoteIcon />}
                target="_blank"
                sx={{ color: "#ba4ef8" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <IconLink
                href="https://www.youtube.com/watch?v=iCcWpw9RU9g"
                text="Trailer"
                icon={<YouTubeIcon />}
                target="_blank"
                sx={{ color: "#ba4ef8" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <IconLink
                href="https://play.google.com/store/apps/details?id=com.RedPandaStudios.Reclaimer"
                text="Source Code"
                icon={<GitHubIcon />}
                target="_blank"
                sx={{ color: "#ba4ef8" }}
              />
            </Grid>
          </Grid>
        </VerticallyCenteredPageContainer>
      </Fade>
    </>
  );
}
