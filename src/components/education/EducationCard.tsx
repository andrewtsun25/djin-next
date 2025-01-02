import SchoolIcon from "@mui/icons-material/School";
import { Box, CardContent, Slide, Typography } from "@mui/material";
import { isEmpty, isNil, map } from "lodash";
import React from "react";

import { Education } from "../../types/api";
import { DurationWithOrganizationCardHeader } from "../card";
import { FullWidthCardContainer } from "../layout";
import { IconLink } from "../text";

interface EducationCardProps {
  education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  education: {
    endDate,
    startDate,
    major,
    organization: { name: organizationName, logoUrl },
    syllabusUrls,
    department,
    residentialCollege,
    gpa,
    description,
    studentOrganizations,
  },
}: EducationCardProps) => {
  return (
    <Slide direction="up" in mountOnEnter unmountOnExit>
      <FullWidthCardContainer>
        <DurationWithOrganizationCardHeader
          title={organizationName}
          subtitle={major}
          startDate={startDate}
          endDate={endDate}
          logoUrl={logoUrl}
        />
        <CardContent>
          {!isNil(syllabusUrls) && !isEmpty(syllabusUrls) && (
            <Box sx={{ mb: 2 }}>
              {map(syllabusUrls, (syllabusUrl, urlName) => (
                <IconLink
                  key={urlName}
                  icon={<SchoolIcon />}
                  href={syllabusUrl}
                  text={urlName}
                />
              ))}
            </Box>
          )}
          {department && (
            <Typography variant="body1">
              <b>Department:</b> {department}
            </Typography>
          )}
          {residentialCollege && (
            <Typography variant="body1">
              <b>Residential College:</b> {residentialCollege}
            </Typography>
          )}
          <Typography variant="body1">
            <b>GPA:</b> {gpa.toFixed(3)}{" "}
            <i>(Transcript is available upon request.)</i>
          </Typography>
          <Typography variant="body1">{description}</Typography>
          {studentOrganizations.length > 0 && (
            <>
              <Typography variant="body1">
                During my time at {organizationName}, I was involved in the
                following student organizations:
              </Typography>
              <ul>
                {studentOrganizations.map(
                  ({ name, description, biography }) => (
                    <li key={name}>
                      <Typography>
                        <b>{name}: </b>
                        <i>{description}</i> {biography}
                      </Typography>
                    </li>
                  ),
                )}
              </ul>
            </>
          )}
        </CardContent>
      </FullWidthCardContainer>
    </Slide>
  );
};
