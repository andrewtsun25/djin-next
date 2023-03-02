import { EmploymentType } from "./EmploymentType";
import { Organization } from "./Organization";

export interface Employment {
  organization: Organization;
  mediaUrl: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  responsibilities: string[];
  skills: string[];
  skillTypes: string[];
  domains: string[];
  employmentType: EmploymentType;
}
