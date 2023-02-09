import { MusicInstrumentType } from "./MusicInstrumentType";

export interface MusicInstrument {
  mediaUrl: string;
  name: string;
  type: MusicInstrumentType;
  scoreUrl: string;
}
