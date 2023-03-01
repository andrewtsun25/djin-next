import { DocumentReference, Timestamp } from "firebase/firestore";

import { Organization } from "../api";

export interface EducationDbEntity {
  department?: string;
  description: string;
  endDate?: Timestamp;
  gpa: number;
  major: string;
  minors?: string[];
  organization: DocumentReference<Organization>;
  residentialCollege?: string;
  startDate: Timestamp;
  syllabusUrls?: Record<string, string>;
  type: string;
}
