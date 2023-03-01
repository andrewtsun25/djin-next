import { Grid } from "@mui/material";
import { isNil } from "lodash";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

import {
  EmploymentCard,
  EmploymentDurationDisplay,
  EmploymentTypeSelect,
} from "../../../src/components/employment";
import {
  EmploymentBackground,
  EmploymentPageHeaderContainer,
  EmploymentPageTitle,
  EmploymentResumeLink,
  EmploymentText,
} from "../../../src/components/employment/styled";
import { listEmployments } from "../../../src/dal/api";
import { Employment, EmploymentType } from "../../../src/types/api";

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

const EMPLOYMENT_TYPES_QUERY_PARAM = "employmentTypes";

const EmploymentPage = ({ employments }: EmploymentNextPageProps) => {
  const router = useRouter();
  const selectedEmploymentTypes: EmploymentType[] = useMemo(() => {
    const { [EMPLOYMENT_TYPES_QUERY_PARAM]: employmentTypesInQuery } =
      router.query;
    return Array.isArray(employmentTypesInQuery)
      ? employmentTypesInQuery.map((et) => et as EmploymentType)
      : !isNil(employmentTypesInQuery)
      ? decodeURIComponent(employmentTypesInQuery)
          .split(",")
          .map((et) => et as EmploymentType)
      : [];
  }, [router.query]);
  const setSelectedEmploymentTypes = (newEmploymentTypes: EmploymentType[]) => {
    // Determine new query parameters
    const newQueryParams: Record<string, string> = {};
    // Only include employment types in query string if they exist.
    if (newEmploymentTypes.length > 0) {
      newQueryParams[EMPLOYMENT_TYPES_QUERY_PARAM] =
        newEmploymentTypes.join(",");
    }
    // Generate new URL and push the state.
    router.replace({ query: newQueryParams }, undefined, {
      shallow: true,
    });
  };
  const selectedEmployments: Employment[] = useMemo(
    () =>
      employments.filter((employment) =>
        selectedEmploymentTypes.length < 1
          ? true // bypass filter if no employment type specified
          : selectedEmploymentTypes.includes(employment.employmentType)
      ),
    [selectedEmploymentTypes, employments]
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
            selectedEmploymentTypes={selectedEmploymentTypes}
            setSelectedEmploymentTypes={setSelectedEmploymentTypes}
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
