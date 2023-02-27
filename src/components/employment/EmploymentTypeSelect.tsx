import React from "react";
import { JobType } from "../../types/api";
import { MultiSelect } from "../select";
import { identity } from "lodash";

interface EmploymentTypeSelectProps {
  employmentTypes: JobType[];
  employmentTypesSelected: JobType[];
  setEmploymentTypesSelected(jobType: JobType[]): void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
    />
  );
};

export default EmploymentTypeSelect;
