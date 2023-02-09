import { GetStaticProps, InferGetStaticPropsType } from "next";
import { listEducationsByEducationType } from "../../../src/dal/api";
import { Education, EduType } from "../../../src/types/api";
import Head from "next/head";
import { CodingEducationBackground } from "../../../src/components/coding/styled";
import { Container } from "@mui/material";
import EducationPageTitle from "../../../src/components/education/styled";

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

const CodingEducationPage = ({ educations }: CodingEducationNextPageProps) => {
  return (
    <>
      <Head>
        <title>Coding Education</title>
      </Head>
      <CodingEducationBackground>
        <Container maxWidth="lg">
          <EducationPageTitle variant="h2">Coding Education</EducationPageTitle>
        </Container>
      </CodingEducationBackground>
    </>
  );
};

export default CodingEducationPage;
