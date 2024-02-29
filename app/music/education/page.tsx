import { Container } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import { EducationCard } from "../../../src/components/education";
import { EducationPageTitle } from "../../../src/components/education/styled";
import { MusicEducationBackground } from "../../../src/components/music/styled";
import { listEducationsByEducationType } from "../../../src/dal/api";
import { Education, EducationType } from "../../../src/types/api";

export const metadata: Metadata = {
  title: "d.jin - Music Education",
};

export default async function MusicEducationPage(): Promise<React.JSX.Element> {
  const educations: Education[] = await listEducationsByEducationType(
    EducationType.MUSIC,
  );
  return (
    <MusicEducationBackground>
      <Container maxWidth="lg">
        <EducationPageTitle variant="h2" sx={{ paddingTop: 10 }}>
          Music Education
        </EducationPageTitle>
        {educations.map((education, index) => (
          <EducationCard education={education} key={index} />
        ))}
      </Container>
    </MusicEducationBackground>
  );
}
