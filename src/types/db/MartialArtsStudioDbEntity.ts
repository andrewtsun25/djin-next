import { Timestamp } from "firebase/firestore";

export interface MartialArtsStudioDbEntity {
  name: string;
  logoUrl: string;
  studioUrl: string;
  city: string;
  joinDate: Timestamp;
}
