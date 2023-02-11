import {
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
  SxProps,
  Theme,
} from "@mui/material";
import React, { ReactElement } from "react";

import { ResponsiveGridContainer, ResponsiveGridTitle } from "./styled";
import { SoundCloudWidget } from "../music";

interface ResponsiveGridProps<T> {
  title?: string;
  items: T[];
  renderGridTile(item: T, index?: number): JSX.Element;
  embedUrl?: string;
  sx?: SxProps<Theme>;
}

function ResponsiveGrid<T>({
  title,
  items,
  renderGridTile,
  embedUrl,
  sx,
}: ResponsiveGridProps<T>): ReactElement<ResponsiveGridProps<T>> {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const cols = isMedium ? 4 : isSmall ? 2 : 1;
  const titleVariant = isMedium ? "h4" : isSmall ? "h5" : "h6";
  return (
    <ResponsiveGridContainer sx={sx}>
      <ImageList cols={cols} gap={10}>
        {title && (
          <ImageListItem cols={cols} style={{ height: "auto" }}>
            <ResponsiveGridTitle paragraph variant={titleVariant}>
              {title}
            </ResponsiveGridTitle>
          </ImageListItem>
        )}
        {embedUrl && (
          <ImageListItem cols={cols} rows={1}>
            <SoundCloudWidget url={embedUrl} showArtWork={isSmall} />
          </ImageListItem>
        )}
        {items.map((item: T, index: number) => renderGridTile(item, index))}
      </ImageList>
    </ResponsiveGridContainer>
  );
}

export default ResponsiveGrid;
