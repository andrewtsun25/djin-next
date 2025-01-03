"use client";

import {
  Box,
  ImageList,
  ImageListItem,
  SxProps,
  Theme,
  Typography,
  TypographyVariant,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { PropsWithChildren } from "react";

import { SoundCloudWidget } from "../music";

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
            <Typography
              variant={titleVariant}
              sx={{
                mt: 0.25,
                mr: "auto",
                mb: 0.25,
                ml: 0.25,
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
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
