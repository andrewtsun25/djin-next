import { Container } from "@mui/material";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

import { EducationCard } from "../../../src/components/education";
import { EducationPageTitle } from "../../../src/components/education/styled";
import { MusicEducationBackground } from "../../../src/components/music/styled";
import { listEducationsByEducationType } from "../../../src/dal/api";
import { Education, EducationType } from "../../../src/types/api";

interface MusicEducationPageProps {
  educations: Education[];
}

export const getStaticProps: GetStaticProps<
  MusicEducationPageProps
> = async () => {
  const educations = await listEducationsByEducationType(EducationType.MUSIC);
  return {
    props: {
      educations,
    },
  };
};

type MusicEducationNextPageProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

const MusicEducationPage = ({ educations }: MusicEducationNextPageProps) => {
  return (
    <>
      <Head>
        <title>Music Education</title>
      </Head>
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
    </>
  );
};

export default MusicEducationPage;
