import { MartialArtsStyleType } from "./MartialArtsStyleType";
import { MartialArtsStudio } from "./MartialArtsStudio";

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
