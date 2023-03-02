import { MartialArtsStudio } from "./MartialArtsStudio";
import { MartialArtsStyleType } from "./MartialArtsStyleType";

export interface MartialArtsStyle {
  type: MartialArtsStyleType;
  name: string;
  logoUrl: string;
  blackBeltRank: number;
  description: string;
  biography: string[];
  mediaUrl: string;
  mediaCaption: string;
  studios: MartialArtsStudio[];
}
