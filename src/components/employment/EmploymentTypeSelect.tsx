"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { identity } from "lodash";
import React from "react";

import { EmploymentType } from "../../types/api";
import { MultiSelect } from "../select";

interface EmploymentTypeSelectProps {
  selectedEmploymentTypes: EmploymentType[];
  setSelectedEmploymentTypes(employmentType: EmploymentType[]): void;
}

const employmentTypes: EmploymentType[] = [
  EmploymentType.FullTime,
  EmploymentType.Internship,
];

export const EmploymentTypeSelect: React.FC<EmploymentTypeSelectProps> = ({
  selectedEmploymentTypes,
  setSelectedEmploymentTypes,
}: EmploymentTypeSelectProps) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const handleChange = (_: React.SyntheticEvent, value: string[]) => {
    setSelectedEmploymentTypes(value.map((v) => v as EmploymentType));
  };
  return (
    <MultiSelect
      sx={{ width: isMd ? 500 : "100%", m: 1 }}
      options={employmentTypes}
      value={selectedEmploymentTypes}
      getOptionLabel={identity}
      inputLabel="Employment Type"
      onChange={handleChange}
      freeSolo={false}
    />
  );
};
