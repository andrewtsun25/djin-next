import { MusicInstrument } from "../../types/api";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { ResponsiveGridItem } from "../responsiveGrid";
import React from "react";

interface MusicInstrumentTileProps {
  musicInstrument: MusicInstrument;
}
const MusicInstrumentTile: React.FC<MusicInstrumentTileProps> = ({
  musicInstrument: { name, mediaUrl, scoreUrl },
}: MusicInstrumentTileProps) => (
  <ResponsiveGridItem
    linkUrl={scoreUrl}
    title={name}
    icon={<CloudDownloadIcon />}
    mediaUrl={mediaUrl}
    mediaSizingStrategy="cover"
  />
);

export default MusicInstrumentTile;
