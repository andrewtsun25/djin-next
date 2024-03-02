"use client";

import { IconButton, SxProps, Theme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { CSSProperties } from "react";

import {
  ResponsiveGridItemImageListItem,
  ResponsiveGridItemImageListItemBar,
} from "./styled";

interface ResponsiveGridItemProps {
  linkUrl?: string;
  mediaUrl: string;
  title: string;
  subtitle?: string;
  icon: React.JSX.Element;
  imageStyle?: CSSProperties;
  sx?: SxProps<Theme>;
}

export const ResponsiveGridItem: React.FC<ResponsiveGridItemProps> = ({
  mediaUrl,
  title,
  subtitle,
  linkUrl,
  icon,
  imageStyle = { objectFit: "contain" },
  sx,
}: ResponsiveGridItemProps) => {
  const router = useRouter();
  return (
    <ResponsiveGridItemImageListItem cols={1} rows={1} sx={sx}>
      <Image src={mediaUrl} alt={`Image of ${title}`} fill style={imageStyle} />
      <ResponsiveGridItemImageListItemBar
        title={title}
        subtitle={subtitle}
        actionIcon={
          linkUrl ? (
            <IconButton
              aria-label={`Download ${title}`}
              onClick={() => router.push(linkUrl)}
              sx={{ color: "rgba(255, 255, 2550.54)" }}
            >
              {icon}
            </IconButton>
          ) : (
            icon
          )
        }
      />
    </ResponsiveGridItemImageListItem>
  );
};

export type { ResponsiveGridItemProps };
