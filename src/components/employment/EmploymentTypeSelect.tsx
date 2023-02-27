import React from "react";
import { JobType } from "../../types/api";
import { MultiSelect } from "../select";
import { identity } from "lodash";

interface EmploymentTypeSelectProps {
  employmentTypesSelected: JobType[];
  setEmploymentTypesSelected(jobType: JobType[]): void;
}

const employmentTypes: JobType[] = [JobType.FullTime, JobType.Internship];
const EmploymentTypeSelect: React.FC<EmploymentTypeSelectProps> = ({
  employmentTypesSelected,
  setEmploymentTypesSelected,
}: EmploymentTypeSelectProps) => {
  const handleChange = (_: React.SyntheticEvent, value: string[]) => {
    setEmploymentTypesSelected(value.map((v) => v as JobType));
  };
  return (
    <MultiSelect
      sx={{ width: 350 }}
      options={employmentTypes}
      value={employmentTypesSelected}
      getOptionLabel={identity}
      inputLabel="Employment Type"
      onChange={handleChange}
      freeSolo={false}
    />
  );
};

export default EmploymentTypeSelect;
