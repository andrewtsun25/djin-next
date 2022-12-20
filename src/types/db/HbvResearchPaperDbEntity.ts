import { DocumentReference, Timestamp } from "firebase/firestore";

export interface HbvResearchPaperDbEntity {
  name: string;

  organization: DocumentReference;
  mediaUrl: string;
  startDate: Timestamp;
  endDate: Timestamp;
  url: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}
