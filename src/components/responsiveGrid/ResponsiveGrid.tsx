"use client";

import {
  ImageList,
  ImageListItem,
  SxProps,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { PropsWithChildren } from "react";

import { SoundCloudWidget } from "../music";
import { ResponsiveGridContainer, ResponsiveGridTitle } from "./styled";

interface ResponsiveGridProps {
  title?: string;
  embedUrl?: string;
  sx?: SxProps<Theme>;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  title,
  embedUrl,
  sx,
  children,
}: PropsWithChildren<ResponsiveGridProps>) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const cols = isMedium ? 4 : isSmall ? 2 : 1;
  const titleVariant = isMedium ? "h4" : isSmall ? "h5" : "h6";
  return (
    <ResponsiveGridContainer sx={sx}>
      <ImageList cols={cols} gap={isSmall ? 10 : 20}>
        {title && (
          <ImageListItem cols={cols} style={{ height: "auto" }}>
            <ResponsiveGridTitle paragraph variant={titleVariant}>
              {title}
            </ResponsiveGridTitle>
          </ImageListItem>
        )}
        {embedUrl && (
          <ImageListItem cols={cols} rows={1}>
            <SoundCloudWidget
              url={embedUrl}
              showArtWork={isSmall}
              style={{ borderRadius: 10 }}
            />
          </ImageListItem>
        )}
        {children}
      </ImageList>
    </ResponsiveGridContainer>
  );
};

export default ResponsiveGrid;
