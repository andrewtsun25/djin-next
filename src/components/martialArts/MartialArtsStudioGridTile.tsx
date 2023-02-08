import React from "react";
import { MartialArtsStudio } from "../../types/api";
import { ResponsiveGridItem } from "../responsiveGrid";
import LaunchIcon from "@mui/icons-material/Launch";

interface MartialArtsStudioGridTileProps {
  studio: MartialArtsStudio;
}
const MartialArtsStudioGridTile: React.FC<MartialArtsStudioGridTileProps> = ({
  studio: { name, logoUrl, studioUrl, city },
}: MartialArtsStudioGridTileProps) => {
  return (
    <ResponsiveGridItem
      linkUrl={studioUrl}
      mediaUrl={logoUrl}
      title={name}
      subtitle={city}
      icon={<LaunchIcon />}
      mediaSizingStrategy="contain"
    />
  );
};

export default MartialArtsStudioGridTile;
