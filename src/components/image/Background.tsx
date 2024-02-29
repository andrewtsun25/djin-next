import { ImageProps } from "next/image";
import React from "react";

import { BackgroundContainer, BackgroundImage } from "./styled";

/**
 * Modifies Next Image to be applied sa aa background.
 * CSS-only technique #2 (https://css-tricks.com/perfect-full-page-background-image/)
 */
export const Background: React.FC<ImageProps> = (props: ImageProps) => (
  <BackgroundContainer>
    <BackgroundImage {...props} />
  </BackgroundContainer>
);
