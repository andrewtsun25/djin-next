import { EduType, Organization, StudentOrganization } from "../api";

export interface Education {
  department?: string;
  description: string;
  endDate?: Date;
  gpa: number;
  major: string;
  minors?: string[];
  organization: Organization;
  residentialCollege?: string;
  startDate: Date;
  syllabusUrls?: Record<string, string>;

  studentOrganizations: StudentOrganization[];
  type: EduType;
}
