import { GetStaticProps, InferGetStaticPropsType } from "next";
import { listEducationsByEducationType } from "../../../src/dal/api";
import { Education, EduType } from "../../../src/types/api";
import Head from "next/head";
import { Container } from "@mui/material";
import { EducationPageTitle } from "../../../src/components/education/styled";
import React from "react";
import { EducationCard } from "../../../src/components/education";
import { MusicEducationBackground } from "../../../src/components/music/styled";

interface MusicEducationPageProps {
  educations: Education[];
}

export const getStaticProps: GetStaticProps<
  MusicEducationPageProps
> = async () => {
  const educations = await listEducationsByEducationType(EduType.MUSIC);
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
