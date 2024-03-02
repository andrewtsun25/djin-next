import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";

import { MartialArtsStudio } from "../../types/api";
import { ResponsiveGridItem } from "../responsiveGrid";

interface MartialArtsStudioGridTileProps {
  studio: MartialArtsStudio;
}
export const MartialArtsStudioGridTile: React.FC<
  MartialArtsStudioGridTileProps
> = ({
  studio: { name, logoUrl, studioUrl, city },
}: MartialArtsStudioGridTileProps) => (
  <ResponsiveGridItem
    linkUrl={studioUrl}
    mediaUrl={logoUrl}
    title={name}
    subtitle={city}
    icon={<LaunchIcon />}
    imageStyle={{ objectFit: "contain" }}
  />
);
