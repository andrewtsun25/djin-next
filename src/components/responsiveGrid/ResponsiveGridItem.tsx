import { ImageListItemBar, SxProps, Theme } from "@mui/material";
import React from "react";

import {
  ResponsiveGridItemIconButton,
  ResponsiveGridItemImageListItem,
} from "./styled";

import Image from "next/image";
import { Property } from "csstype";
import ObjectFit = Property.ObjectFit;
import { useRouter } from "next/router";

const ITEM_MARGIN = 5;

interface ResponsiveGridItemProps {
  linkUrl?: string;
  mediaUrl: string;
  title: string;
  subtitle?: string;
  icon: JSX.Element;
  mediaSizingStrategy?: ObjectFit;
  sx?: SxProps<Theme>;
}

const ResponsiveGridItem: React.FC<ResponsiveGridItemProps> = ({
  mediaUrl,
  title,
  subtitle,
  linkUrl,
  icon,
  mediaSizingStrategy,
  sx,
}: ResponsiveGridItemProps) => {
  const router = useRouter();
  return (
    <ResponsiveGridItemImageListItem cols={1} rows={1} sx={sx}>
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
              onClick={() =>
                router.push({
                  pathname: linkUrl,
                })
              }
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
