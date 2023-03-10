import { Container } from "@mui/material";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

import { CodingEducationBackground } from "../../../src/components/coding/styled";
import { EducationCard } from "../../../src/components/education";
import { EducationPageTitle } from "../../../src/components/education/styled";
import { listEducationsByEducationType } from "../../../src/dal/api";
import { Education, EducationType } from "../../../src/types/api";

interface CodingEducationPageProps {
  educations: Education[];
}

export const getStaticProps: GetStaticProps<
  CodingEducationPageProps
> = async () => {
  const educations = await listEducationsByEducationType(EducationType.CODING);
  return {
    props: {
      educations,
    },
  };
};

type CodingEducationNextPageProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

const CodingEducationPage = ({ educations }: CodingEducationNextPageProps) => (
  <>
    <Head>
      <title>d.jin - Coding Education</title>
    </Head>
    <CodingEducationBackground>
      <Container maxWidth="lg">
        <EducationPageTitle variant="h2">Coding Education</EducationPageTitle>
        {educations.map((education, index) => (
          <EducationCard education={education} key={index} />
        ))}
      </Container>
    </CodingEducationBackground>
  </>
);

export default CodingEducationPage;
