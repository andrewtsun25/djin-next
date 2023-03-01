import { Organization } from "./Organization";
import { EmploymentType } from "./EmploymentType";

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
