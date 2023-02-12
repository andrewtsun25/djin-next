import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { useMemo, useState } from "react";
import { Employment, JobType } from "../../../src/types/api";
import { listEmployments } from "../../../src/dal/api";
import {
  EmploymentBackground,
  EmploymentPageTitle,
  EmploymentText,
  EmploymentResumeLink,
  EmploymentPageHeaderContainer,
} from "../../../src/components/employment/styled";
import {
  EmploymentCard,
  EmploymentDurationDisplay,
  EmploymentTypeSelect,
} from "../../../src/components/employment";
import { Grid } from "@mui/material";

interface EmploymentPageProps {
  employments: Employment[];
}

export const getStaticProps: GetStaticProps<EmploymentPageProps> = async () => {
  const employments = await listEmployments();
  return {
    props: {
      employments,
    },
  };
};

type EmploymentNextPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const RESUME_URL =
  "https://docs.google.com/document/d/1fIQ8ceaV1BW7FmWvPe8aGGlLVFtXxLcHDIOf7swxXzw/edit?usp=sharing";

const EmploymentPage = ({ employments }: EmploymentNextPageProps) => {
  const [filterBy, setFilterBy] = useState<JobType[]>([
    JobType.FullTime,
    JobType.Internship,
  ]);
  const selectedEmployments: Employment[] = useMemo(
    () =>
      employments.filter((employment) => filterBy.includes(employment.jobType)),
    [filterBy, employments]
  );
  console.log(
    "Employments w/o responsibilities: ",
    employments.filter((employment) => !employment.responsibilities)
  );
  return (
    <>
      <Head>
        <title>d.jin - Employment</title>
      </Head>
      <EmploymentBackground>
        <EmploymentPageHeaderContainer>
          <EmploymentPageTitle variant="h2">
            Coding Employment
          </EmploymentPageTitle>
          <EmploymentText>
            A more official, detailed résumé can be obtained{" "}
            <EmploymentResumeLink
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </EmploymentResumeLink>
            .
          </EmploymentText>
          <EmploymentTypeSelect
            employmentTypesSelected={filterBy}
            setEmploymentTypesSelected={setFilterBy}
          />
          <EmploymentDurationDisplay employments={selectedEmployments} />
        </EmploymentPageHeaderContainer>
        <Grid container direction="row">
          {selectedEmployments.map((employment, index) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
              <EmploymentCard employment={employment} />
            </Grid>
          ))}
        </Grid>
      </EmploymentBackground>
    </>
  );
};

export default EmploymentPage;
