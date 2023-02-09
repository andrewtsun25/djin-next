import { Timestamp } from "firebase/firestore";

export interface MusicScoreDbEntity {
  date: Timestamp;
  name: string;
  sections: Record<string, string>;
  trackUrl: string;
}
