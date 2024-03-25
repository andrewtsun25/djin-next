import { render, screen } from "@testing-library/react";

import { Education, EducationType, StudentOrganization } from "../../types/api";
import { EducationCard, syllabusUrlsContainerTestId } from "./EducationCard";

const description: string = "Description";
const endDate: Date = new Date(2024, 0, 1);
const endDateAsStr: string = "Jan 1, 2024";
const major: string = "Major";
const organizationName: string = "Organization";
const startDate: Date = new Date(2023, 0, 1);
const startDateAsStr: string = "Jan 1, 2023";
const testEducationBase: Education = {
  description,
  endDate,
  gpa: 3.141,
  major,
  organization: {
    name: organizationName,
    logoUrl: "logoUrl",
    id: "organizationId",
  },
  startDate,
  studentOrganizations: [],
  type: EducationType.CODING,
};
describe("EducationCard", () => {
  test("should render a header with the organization name, major, start date, and end date if the end date exists", () => {
    render(<EducationCard education={testEducationBase} />);
    expect(screen.getByText(organizationName)).not.toBeNull();
    expect(screen.getByText(major, { exact: false })).not.toBeNull();
    expect(
      screen.getByText(`${startDateAsStr} - ${endDateAsStr}`, { exact: false }),
    ).not.toBeNull();
  });

  test("should render a header with the organization name, major, start date, and 'Present' if the end date does not exist", () => {
    const education: Education = {
      ...testEducationBase,
      endDate: undefined,
    };
    render(<EducationCard education={education} />);
    expect(screen.getByText(organizationName)).not.toBeNull();
    expect(screen.getByText(major, { exact: false })).not.toBeNull();
    expect(
      screen.getByText(`${startDateAsStr} - Present`, { exact: false }),
    ).not.toBeNull();
  });

  test("should render syllabus URLs in order if they do exist", () => {
    const syllabusUrl1Name = "Syllabus URL 1";
    const syllabusUrl2Name = "Syllabus URL 2";
    const syllabusUrls: Record<string, string> = {
      [syllabusUrl1Name]: "https://university.com/syllabus1",
      [syllabusUrl2Name]: "https://university.com/syllabus2",
    };
    const education: Education = {
      ...testEducationBase,
      syllabusUrls,
    };
    render(<EducationCard education={education} />);
    const studentOrganizationElements =
      screen.getAllByText(/^.*Syllabus URL.*$/);
    expect(studentOrganizationElements).toHaveLength(
      Object.keys(syllabusUrls).length,
    );
    const [syllabusUrl1Element, syllabusUrl2Element] =
      studentOrganizationElements;
    expect(syllabusUrl1Element).toHaveTextContent(syllabusUrl1Name);
    expect(syllabusUrl2Element).toHaveTextContent(syllabusUrl2Name);
  });

  test("should not render syllabus URLs if they do not exist", () => {
    render(<EducationCard education={testEducationBase} />);
    expect(screen.queryByTestId(syllabusUrlsContainerTestId)).toBeNull();
  });

  test("should render a department if it exists", () => {
    const department: string = "department";
    const education: Education = {
      ...testEducationBase,
      department,
    };
    render(<EducationCard education={education} />);
    expect(screen.getByText("Department:")).not.toBeNull();
    expect(screen.getByText(department)).not.toBeNull();
  });

  test("should not render a department if it doesn't exist", () => {
    render(<EducationCard education={testEducationBase} />);
    expect(screen.queryByText("Department:")).toBeNull();
  });

  test("should render a residential college if it exists", () => {
    const residentialCollege: string = "residentialCollege";
    const education: Education = {
      ...testEducationBase,
      residentialCollege,
    };
    render(<EducationCard education={education} />);
    expect(screen.getByText("Residential College:")).not.toBeNull();
    expect(screen.getByText(residentialCollege)).not.toBeNull();
  });

  test("should not render a residential college if it doesn't exist", () => {
    render(<EducationCard education={testEducationBase} />);
    expect(screen.queryByText("Residential College:")).toBeNull();
  });

  test("renders the GPA to 3 fixed decimal places", () => {
    const gpa: number = 1.23456;
    const expectedGpa: string = "1.235";
    const education: Education = {
      ...testEducationBase,
      gpa,
    };
    render(<EducationCard education={education} />);
    expect(screen.getByText(expectedGpa)).not.toBeNull();
  });

  test("should always render a description", () => {
    render(<EducationCard education={testEducationBase} />);
    expect(screen.getByText(description)).not.toBeNull();
  });

  test("renders student organizations in order if they exist", () => {
    const studentOrgPrefix: string = "Student Organization";
    const studentOrganizations: StudentOrganization[] = [
      {
        name: `${studentOrgPrefix} 1`,
        description: "This is what the student organization 1 does.",
        biography: "This is what I did for the student organization 1.",
      },
      {
        name: `${studentOrgPrefix} 2`,
        description: "This is what the student organization 2 does.",
        biography: "This is what I did for student organization 2.",
      },
    ];
    const education: Education = {
      ...testEducationBase,
      studentOrganizations,
    };
    render(<EducationCard education={education} />);
    expect(
      screen.getByText(
        `During my time at ${organizationName}, I was involved in the following student organizations:`,
      ),
    ).not.toBeNull();
    const studentOrganizationElements = screen.getAllByText(
      /^.*Student Organization.*$/,
    );
    expect(studentOrganizationElements).toHaveLength(
      studentOrganizations.length,
    );
    const [studentOrg1Element, studentOrg2Element] =
      studentOrganizationElements;
    expect(studentOrg1Element).toHaveTextContent(studentOrganizations[0].name);
    expect(studentOrg2Element).toHaveTextContent(studentOrganizations[1].name);
  });

  test("doesn't render student organizations in order if they don't exist", () => {
    render(<EducationCard education={testEducationBase} />);
    expect(
      screen.queryByText(
        `During my time at ${organizationName}, I was involved in the following student organizations:`,
      ),
    ).toBeNull();
  });
});
