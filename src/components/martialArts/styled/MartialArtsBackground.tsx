"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const martialArtsBg = `${Urls.AssetRoot}/martialArts/bg/mma_cage_bg.jpg`;

const MartialArtsBackground = styled(Box)({
  background: `url(${martialArtsBg}) no-repeat center center fixed`,
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  minHeight: "100vh",
});

export default MartialArtsBackground;
