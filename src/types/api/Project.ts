import { Organization } from "./Organization";

export interface Project {
  name: string;
  startDate: Date;
  endDate?: Date;
  mediaUrl: string;
  description: string;
  responsibilities: string[];
  organization: Organization;
  skills: string[];
  disclaimer?: string;
  domains: string[];
  skillTypes: string[];
  projectUrls?: Record<string, string>;
}
