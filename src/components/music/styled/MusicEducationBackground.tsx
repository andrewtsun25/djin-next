"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Urls } from "../../../const/url";

const musicEducationBackgroundUrl = `${Urls.AssetRoot}/education/bg/pioneer_cdj_bg.jpeg`;

const MusicEducationBackground = styled(Box)({
  background: `url(${musicEducationBackgroundUrl}) no-repeat center center fixed`,
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  // minHeight: "100vh",
});

export default MusicEducationBackground;
