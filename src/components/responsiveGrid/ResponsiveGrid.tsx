import {
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { ReactElement } from "react";

import { ResponsiveGridContainer, ResponsiveGridTitle } from "./styled";

interface ResponsiveGridProps<T> {
  title?: string;
  items: T[];
  className?: string;
  renderGridTile(item: T, index?: number): JSX.Element;
  embedUrl?: string;
}

function ResponsiveGrid<T>({
  title,
  items,
  renderGridTile,
  className,
  embedUrl,
}: ResponsiveGridProps<T>): ReactElement<ResponsiveGridProps<T>> {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const cols = isMedium ? 4 : isSmall ? 2 : 1;
  const titleVariant = isMedium ? "h4" : isSmall ? "h5" : "h6";
  return (
    <ResponsiveGridContainer className={className}>
      <ImageList cols={cols} gap={10}>
        {title && (
          <ImageListItem cols={cols} style={{ height: "auto" }}>
            <ResponsiveGridTitle paragraph variant={titleVariant}>
              {title}
            </ResponsiveGridTitle>
          </ImageListItem>
        )}
        {/*embedUrl && (
          <ImageListItem cols={cols} style={{ height: "auto" }}>
            <Embed url={embedUrl} />
          </ImageListItem>
        )*/}
        {items.map((item: T, index: number) => renderGridTile(item, index))}
      </ImageList>
    </ResponsiveGridContainer>
  );
}

export default ResponsiveGrid;
