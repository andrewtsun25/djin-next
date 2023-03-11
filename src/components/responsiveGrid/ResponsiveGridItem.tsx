import { SxProps, Theme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { CSSProperties } from "react";

import {
  ResponsiveGridItemIconButton,
  ResponsiveGridItemImageListItem,
  ResponsiveGridItemImageListItemBar,
} from "./styled";

interface ResponsiveGridItemProps {
  linkUrl?: string;
  mediaUrl: string;
  title: string;
  subtitle?: string;
  icon: JSX.Element;
  imageStyle?: CSSProperties;
  sx?: SxProps<Theme>;
}

const ResponsiveGridItem: React.FC<ResponsiveGridItemProps> = ({
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
