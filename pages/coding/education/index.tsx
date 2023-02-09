import { GetStaticProps, InferGetStaticPropsType } from "next";
import { listEducationsByEducationType } from "../../../src/dal/api";
import { Education, EduType } from "../../../src/types/api";
import Head from "next/head";
import { CodingEducationBackground } from "../../../src/components/coding/styled";
import { Container } from "@mui/material";
import { EducationPageTitle } from "../../../src/components/education/styled";
import React from "react";
import { EducationCard } from "../../../src/components/education";

interface CodingEducationPageProps {
  educations: Education[];
}

export const getStaticProps: GetStaticProps<
  CodingEducationPageProps
> = async () => {
  const educations = await listEducationsByEducationType(EduType.CODING);
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
      <title>Coding Education</title>
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
