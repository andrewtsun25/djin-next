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
import { ReclaimerImage } from "../../../src/components/reclaimer/styled";
import { IconLink, MuiNextLink } from "../../../src/components/text";
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
          <Typography variant="h2" textAlign="center">
            Reclaimer
          </Typography>
          <Grow in>
            <ReclaimerImage
              src={gameImg}
              alt="Reclaimer Game Image"
              width={1000}
              height={562}
            />
          </Grow>
          <Typography paragraph fontWeight="bold">
            Update: Due to a lack of current development efforts, Reclaimer is
            no longer available for Android on the Google Play Store.
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
            is a mobile game developed on Unity in C#, playable on both Android
            and iOS. The game was developed for an elective course, CSCI-599:
            Mobile Social Games, at USC from January 2020 to May 2020. Players
            start in a jail cell and have to escape the dungeon. Along the way,
            they can pick up weapons and items in the environment, and fight
            medieval enemies that stand in the way of their escape.
          </Typography>
          <Typography paragraph sx={{ alignSelf: "flex-start" }}>
            Fighting takes place with Infinity Blade-style combat. Players can
            attack in 4 directions using single-finger swipes. Every so often,
            an enemy’s attack will be signaled by arrows on screen. Blocking is
            accomplished by swiping with two fingers in the direction of the
            arrows. Failure to do so results in getting hit. Players are
            rewarded to respond quickly; “perfect” blocks on-time result in a
            powerful counterattack dealt to the enemy.
          </Typography>
          <Typography paragraph sx={{ alignSelf: "flex-start" }}>
            Players can get coins from the environment, opening chests, and
            defeating enemies. These coins can be traded for stronger items in
            the dungeon’s shop.
          </Typography>
          <Typography paragraph sx={{ alignSelf: "flex-start" }}>
            My role on the team is the data analyst. For every event worth
            tracking (fighting enemies, combat techniques, item purchases and
            usage, etc.), I created analytics hooks to funnel Unity Analytics
            events into a dashboard. From these events, I delivered weekly
            reports detailing user activity in-game, providing evidence-based
            feedback to class professors and the rest of my development team on
            new features to develop, or existing features to re-adjust.
          </Typography>
          <Typography paragraph sx={{ alignSelf: "flex-start" }}>
            Media-wise, I also helped develop the video used in the trailer and
            composed the music for the soundtrack. I also helped manage app
            publishing to the Google Play Services.
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
