"use client";

import { Grid } from "@mui/material";
import { isNil } from "lodash";
import { useQueryState } from "nuqs";
import React, { useMemo } from "react";

import { Employment, EmploymentType } from "../../types/api";
import {
  EmploymentCard,
  EmploymentDurationDisplay,
  EmploymentTypeSelect,
} from "./index";
import {
  EmploymentPageHeaderContainer,
  EmploymentResumeLink,
  EmploymentText,
} from "./styled";

const resumeUrl =
  "https://docs.google.com/document/d/1RVocDw54Fpw8sKh6_ygapMjB4kZz_QFkhUxQ5nhiOx8/edit?usp=sharing";
const typesQueryParameter = "types";
const typesSeparator = ",";

interface EmploymentSelectionProps {
  employments: Employment[];
}

export const EmploymentSelection: React.FC<EmploymentSelectionProps> = ({
  employments,
}: EmploymentSelectionProps) => {
  const [
    selectedEmploymentTypesQueryParam,
    setSelectedEmploymentTypesQueryParam,
  ] = useQueryState(typesQueryParameter);
  const selectedEmploymentTypes: EmploymentType[] = useMemo(
    () =>
      isNil(selectedEmploymentTypesQueryParam) ||
      selectedEmploymentTypesQueryParam.length < 1
        ? []
        : selectedEmploymentTypesQueryParam
            .split(typesSeparator)
            .map((et) => et as EmploymentType),
    [selectedEmploymentTypesQueryParam],
  );
  const setSelectedEmploymentTypes = async (
    newEmploymentTypes: EmploymentType[],
  ) => {
    await setSelectedEmploymentTypesQueryParam(
      newEmploymentTypes.length > 0
        ? newEmploymentTypes.join(typesSeparator)
        : null,
    );
  };
  const selectedEmployments: Employment[] = useMemo(
    () =>
      employments.filter((employment) =>
        selectedEmploymentTypes.length < 1
          ? true // bypass filter if no employment type specified
          : selectedEmploymentTypes.includes(employment.employmentType),
      ),
    [selectedEmploymentTypes, employments],
  );

  return (
    <>
      <EmploymentPageHeaderContainer>
        <EmploymentText sx={{ m: 2 }}>
          My most current résumé can be obtained{" "}
          <EmploymentResumeLink
            href={resumeUrl}
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
    </>
  );
};
