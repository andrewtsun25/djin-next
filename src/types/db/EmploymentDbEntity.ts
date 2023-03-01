import { DocumentReference, Timestamp } from "firebase/firestore";

import { Organization } from "../api";

export interface EmploymentDbEntity {
  organization: DocumentReference<Organization>;
  mediaUrl: string;
  role: string;
  startDate: Timestamp;
  endDate?: Timestamp;
  description: string;
  responsibilities?: string[];
  skills: string[];
  skillTypes: string[];
  domains: string[];
  jobType: string;
}
