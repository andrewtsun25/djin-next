import { Organization } from "./Organization";

export interface HbvResearchPaper {
  name: string;
  organization: Organization;
  mediaUrl: string;
  startDate: Date;
  endDate: Date;
  paperLink: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}
