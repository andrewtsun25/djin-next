"use client";

import {
  Box,
  ImageList,
  ImageListItem,
  SxProps,
  Theme,
  TypographyVariant,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { PropsWithChildren } from "react";

import { SoundCloudWidget } from "../music";
import { ResponsiveGridTitle } from "./styled";

interface ResponsiveGridProps {
  title?: string;
  embedUrl?: string;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  title,
  embedUrl,
  sx,
  children,
}: PropsWithChildren<ResponsiveGridProps>) => {
  const theme: Theme = useTheme();
  const isSmall: boolean = useMediaQuery(theme.breakpoints.up("sm"));
  const isMedium: boolean = useMediaQuery(theme.breakpoints.up("md"));
  const cols: number = isMedium ? 4 : isSmall ? 2 : 1;
  const titleVariant: TypographyVariant = isMedium ? "h4" : "h5";
  return (
    <Box sx={sx}>
      <ImageList
        cols={cols}
        gap={isSmall ? 10 : 20}
        sx={{
          marginBlockStart: 0,
          marginBlockEnd: 0,
          marginInlineStart: 0,
          marginInlineEnd: 0,
        }}
      >
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
    </Box>
  );
};
