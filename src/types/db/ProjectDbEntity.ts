import { DocumentReference, Timestamp } from "firebase/firestore";
import { Organization } from "../api";

export interface ProjectDbEntity {
  name: string;
  startDate: Timestamp;
  endDate?: Timestamp;
  mediaUrl: string;
  description: string;
  responsibilities?: string[];
  organization: DocumentReference<Organization>;
  skills: string[];
  disclaimer?: string;
  domains: string[];
  skillTypes: string[];
  projectUrls?: Record<string, string>;
}
