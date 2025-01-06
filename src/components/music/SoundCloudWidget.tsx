import React, { useMemo } from "react";

// The props mirror the SoundCloud Widget API: https://developers.soundcloud.com/docs/api/html5-widget

interface SoundCloudPlayerProps {
  url: string;
  autoPlay?: boolean;
  buying?: boolean;
  color?: string;
  download?: boolean;
  sharing?: boolean;
  showArtWork?: boolean;
  showPlayCount?: boolean;
  showUser?: boolean;
  singleActive?: boolean;
  startTrack?: number;
  style?: React.CSSProperties;
}

const baseUrl = "https://w.soundcloud.com/player";

export const SoundCloudWidget: React.FC<SoundCloudPlayerProps> = ({
  url,
  autoPlay = false,
  buying = false,
  color,
  download = false,
  sharing = true,
  showArtWork = true,
  showPlayCount = true,
  showUser = true,
  singleActive = true,
  startTrack = 0,
  style,
}: SoundCloudPlayerProps) => {
  const src = useMemo(() => {
    const playerUrl = new URL(baseUrl);
    playerUrl.searchParams.append("url", url);
    playerUrl.searchParams.append("auto_play", autoPlay.toString());
    playerUrl.searchParams.append("buying", buying.toString());
    if (color) {
      playerUrl.searchParams.append("color", color);
    }
    playerUrl.searchParams.append("download", download.toString());
    playerUrl.searchParams.append("sharing", sharing.toString());
    playerUrl.searchParams.append("show_artwork", showArtWork.toString());
    playerUrl.searchParams.append("show_playcount", showPlayCount.toString());
    playerUrl.searchParams.append("show_user", showUser.toString());
    playerUrl.searchParams.append("single_active", singleActive.toString());
    playerUrl.searchParams.append("start_track", startTrack.toString());
    return playerUrl;
  }, [
    url,
    autoPlay,
    buying,
    color,
    download,
    sharing,
    showArtWork,
    showPlayCount,
    showUser,
    singleActive,
    startTrack,
  ]);

  return (
    <iframe
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "auto",
        border: "0px", // replaces frameborder = 'no'
        overflow: "hidden", // replaces scrolling = 'no'
        ...style,
      }}
      src={src.toString()}
    />
  );
};
