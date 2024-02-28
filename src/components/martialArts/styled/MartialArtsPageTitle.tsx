"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MartialArtsPageTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  [theme.breakpoints.down("xl")]: {
    margin: 0,
  },
  textAlign: "center",
}));

export default MartialArtsPageTitle;
