import React, { PropsWithChildren } from "react";

import { BackgroundImageBox } from "./styled";

interface ImageBackgroundProps {
  src: string;
  backgroundColor?: string;
}

export const ImageBackground: React.FC<ImageBackgroundProps> = ({
  src,
  backgroundColor = "transparent",
}: PropsWithChildren<ImageBackgroundProps>) => {
  return (
    <BackgroundImageBox
      sx={{ backgroundImage: `url(${src})`, backgroundColor }}
    />
  );
};
