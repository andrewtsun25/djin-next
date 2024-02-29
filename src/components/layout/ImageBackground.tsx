import React, { PropsWithChildren } from "react";

import { BackgroundImageBox } from "./styled";

interface Background2Props {
  src: string;
}

export const ImageBackground: React.FC<Background2Props> = ({
  src,
}: PropsWithChildren<Background2Props>) => {
  return <BackgroundImageBox sx={{ backgroundImage: `url(${src})` }} />;
};
