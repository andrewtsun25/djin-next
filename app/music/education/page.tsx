import { Metadata } from "next";
import React from "react";

import { EducationCard } from "../../../src/components/education";
import { EducationPageTitle } from "../../../src/components/education/styled";
import { Background, PageContainer } from "../../../src/components/layout";
import { listEducationsByEducationType } from "../../../src/dal/api";
import { Education, EducationType } from "../../../src/types/api";

const bgUrl =
  "https://storage.googleapis.com/djin-dev.appspot.com/education/bg/pioneer_cdj_bg.jpeg";
const bgAlt = "Music Education Background";
const bgHeight = 1440;
const bgWidth = 2560;

export const metadata: Metadata = {
  title: "d.jin - Music Education",
};

export default async function MusicEducationPage(): Promise<React.JSX.Element> {
  const educations: Education[] = await listEducationsByEducationType(
    EducationType.MUSIC,
  );
  return (
    <>
      <Background src={bgUrl} alt={bgAlt} height={bgHeight} width={bgWidth} />
      <PageContainer>
        <EducationPageTitle variant="h2">Music Education</EducationPageTitle>
        {educations.map((education, index) => (
          <EducationCard education={education} key={index} />
        ))}
      </PageContainer>
    </>
  );
}
