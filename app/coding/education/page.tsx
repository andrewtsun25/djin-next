import { Container } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import { CodingEducationBackground } from "../../../src/components/coding/styled";
import { EducationCard } from "../../../src/components/education";
import { EducationPageTitle } from "../../../src/components/education/styled";
import { listEducationsByEducationType } from "../../../src/dal/api";
import { Education, EducationType } from "../../../src/types/api";

export const metadata: Metadata = {
  title: "d.jin - Coding Education",
};

export default async function CodingEducationPage(): Promise<React.JSX.Element> {
  const educations: Education[] = await listEducationsByEducationType(
    EducationType.CODING,
  );
  return (
    <CodingEducationBackground>
      <Container maxWidth="lg">
        <EducationPageTitle variant="h2">Coding Education</EducationPageTitle>
        {educations.map((education, index) => (
          <EducationCard education={education} key={index} />
        ))}
      </Container>
    </CodingEducationBackground>
  );
}
