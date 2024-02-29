import { Metadata } from "next";
import React from "react";

import { EducationCard } from "../../../src/components/education";
import { EducationPageTitle } from "../../../src/components/education/styled";
import { ImageBackground, PageContainer } from "../../../src/components/layout";
import { listEducationsByEducationType } from "../../../src/dal/api";
import { Education, EducationType } from "../../../src/types/api";

// Background configuration
const bgUrl =
  "https://storage.googleapis.com/djin-dev.appspot.com/education/bg/pioneer_cdj_bg.jpeg";

export const metadata: Metadata = {
  title: "d.jin - Music Education",
};

export default async function MusicEducationPage(): Promise<React.JSX.Element> {
  const educations: Education[] = await listEducationsByEducationType(
    EducationType.MUSIC,
  );
  return (
    <>
      <ImageBackground src={bgUrl} />
      <PageContainer>
        <EducationPageTitle variant="h2">Music Education</EducationPageTitle>
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

// <!-- <Background src={bgUrl} alt={bgAlt} height={bgHeight} width={bgWidth} /> -->
