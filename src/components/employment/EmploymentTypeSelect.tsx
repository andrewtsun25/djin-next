import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { JobType } from "../../types/api";
import { EmploymentText, EmploymentTypeSelectContainer } from "./styled";

interface EmploymentTypeSelectProps {
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

const EmploymentTypeSelect: React.FC<EmploymentTypeSelectProps> = ({
  employmentTypesSelected,
  setEmploymentTypesSelected,
}: EmploymentTypeSelectProps) => {
  const handleChange = ({
    target: { value: newEmploymentTypesSelectedAsString },
  }: SelectChangeEvent<JobType[]>) => {
    const newEmploymentTypesSelected: JobType[] =
      typeof newEmploymentTypesSelectedAsString === "string"
        ? newEmploymentTypesSelectedAsString
            .split(",")
            .map((employmentType) => employmentType as JobType)
        : newEmploymentTypesSelectedAsString;
    setEmploymentTypesSelected(newEmploymentTypesSelected);
  };
  return (
    <FormControl>
      <InputLabel id="demo-multiple-checkbox-label">Employment Type</InputLabel>
      <Select
        labelId="employment-type-selection-label"
        id="employment-type-selection"
        multiple
        value={employmentTypesSelected}
        onChange={handleChange}
        input={<OutlinedInput label="Types of Employment" />}
        renderValue={(selected: JobType[]) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value: JobType) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        <MenuItem key={JobType.FullTime} value={JobType.FullTime}>
          <Checkbox
            checked={employmentTypesSelected.indexOf(JobType.FullTime) > -1}
          />
          <ListItemText primary={JobType.FullTime} />
        </MenuItem>
        <MenuItem key={JobType.Internship} value={JobType.Internship}>
          <Checkbox
            checked={employmentTypesSelected.indexOf(JobType.Internship) > -1}
          />
          <ListItemText primary={JobType.Internship} />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default EmploymentTypeSelect;
