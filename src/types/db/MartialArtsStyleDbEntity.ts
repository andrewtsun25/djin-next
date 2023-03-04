import { DocumentReference, Timestamp } from "firebase/firestore";

import { MartialArtsStudio } from "../api";

export interface MartialArtsStyleDbEntity {
  type: string;
  name: string;
  logoUrl: string;
  expLevel: string;
  description: string;
  biography: string[];
  mediaUrl: string;
  mediaCaption: string;
  studios: DocumentReference<MartialArtsStudio>[];
  joinDate: Timestamp;
}
