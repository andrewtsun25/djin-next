import {
  ImageListItem,
  ImageListItemBar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

import {
  ResponsiveGridItemIconButton,
  ResponsiveGridItemImageListItem,
} from "./styled";

import Image from "next/image";
import { Property } from "csstype";
import ObjectFit = Property.ObjectFit;

const ITEM_MARGIN = 5;

interface ResponsiveGridItemProps {
  linkUrl?: string;
  mediaUrl: string;
  title: string;
  subtitle?: string;
  icon: JSX.Element;
  mediaSizingStrategy?: ObjectFit;
}

const ResponsiveGridItem: React.FC<ResponsiveGridItemProps> = ({
  mediaUrl,
  title,
  subtitle,
  linkUrl,
  icon,
  mediaSizingStrategy,
}: ResponsiveGridItemProps) => {
  return (
    <ResponsiveGridItemImageListItem cols={1} rows={1}>
      <Image
        src={mediaUrl}
        alt={`Image of ${title}`}
        fill
        style={{ objectFit: mediaSizingStrategy ?? "contain" }}
      />
      <ImageListItemBar
        title={title}
        subtitle={subtitle}
        actionIcon={
          linkUrl ? (
            <ResponsiveGridItemIconButton
              aria-label={`Download ${title}`}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </ResponsiveGridItemIconButton>
          ) : (
            icon
          )
        }
      />
    </ResponsiveGridItemImageListItem>
  );
};

export type { ResponsiveGridItemProps };
export default ResponsiveGridItem;
