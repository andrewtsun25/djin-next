import { Metadata } from "next";
import React from "react";

import { EducationCard } from "../../../src/components/education";
import { EducationPageTitle } from "../../../src/components/education/styled";
import { ImageBackground, PageContainer } from "../../../src/components/layout";
import { listEducationsByEducationType } from "../../../src/dal/api";
import { Education, EducationType } from "../../../src/types/api";

const bgUrl =
  "https://storage.googleapis.com/djin-dev.appspot.com/education/bg/hogwarts_bg.jpg";

export const metadata: Metadata = {
  title: "d.jin - Coding Education",
};

export default async function CodingEducationPage(): Promise<React.JSX.Element> {
  const educations: Education[] = await listEducationsByEducationType(
    EducationType.CODING,
  );
  return (
    <>
      <ImageBackground src={bgUrl} />
      <PageContainer>
        <EducationPageTitle variant="h2">Coding Education</EducationPageTitle>
        {educations.map((education: Education) => (
          <EducationCard
            education={education}
            key={education.organization.id}
          />
        ))}
      </PageContainer>
    </>
  );
}
