// import { DocumentReference } from "../firebase/firestore";

export interface HbvResearchPaperDbEntity {
  name: string;
  // organization: DocumentReference;
  mediaUrl: string;
  startDate: Date;
  endDate: Date;
  paperLink: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}
