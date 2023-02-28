import React from "react";
import { JobType } from "../../types/api";
import { MultiSelect } from "../select";
import { identity } from "lodash";

interface EmploymentTypeSelectProps {
  selectedEmploymentTypes: JobType[];
  setSelectedEmploymentTypes(jobType: JobType[]): void;
}

const employmentTypes: JobType[] = [JobType.FullTime, JobType.Internship];
const EmploymentTypeSelect: React.FC<EmploymentTypeSelectProps> = ({
  selectedEmploymentTypes,
  setSelectedEmploymentTypes,
}: EmploymentTypeSelectProps) => {
  const handleChange = (_: React.SyntheticEvent, value: string[]) => {
    setSelectedEmploymentTypes(value.map((v) => v as JobType));
  };
  return (
    <MultiSelect
      sx={{ width: 350 }}
      options={employmentTypes}
      value={selectedEmploymentTypes}
      getOptionLabel={identity}
      inputLabel="Employment Type"
      onChange={handleChange}
      freeSolo={false}
    />
  );
};

export default EmploymentTypeSelect;
