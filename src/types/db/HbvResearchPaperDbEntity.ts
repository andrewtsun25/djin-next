import { DocumentReference, Timestamp } from "firebase/firestore";

import { Organization } from "../api";

export interface HbvResearchPaperDbEntity {
  name: string;

  organization: DocumentReference<Organization>;
  mediaUrl: string;
  startDate: Timestamp;
  endDate: Timestamp;
  url: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}
