import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import React from "react";

import { MusicInstrument } from "../../types/api";
import { ResponsiveGridItem } from "../responsiveGrid";

interface MusicInstrumentTileProps {
  musicInstrument: MusicInstrument;
}

export const MusicInstrumentTile: React.FC<MusicInstrumentTileProps> = ({
  musicInstrument: { name, mediaUrl, scoreUrl },
}: MusicInstrumentTileProps) => (
  <ResponsiveGridItem
    linkUrl={scoreUrl}
    title={name}
    icon={<CloudDownloadIcon />}
    mediaUrl={mediaUrl}
    imageStyle={{ objectFit: "cover" }}
  />
);
