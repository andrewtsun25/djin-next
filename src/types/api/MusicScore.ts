import { MusicInstrument } from "./MusicInstrument";

export interface MusicScore {
  date: Date;
  name: string;
  musicInstruments: MusicInstrument[];
  trackUrl: string;
}
