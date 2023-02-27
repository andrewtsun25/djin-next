import React from "react";
import { Organization } from "../../types/api";
import { MultiSelect } from "../select";
import { Chip, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

interface ProjectOrganizationSelectProps {
  organizations: Organization[];
  organizationsSelected: Organization[];
  setOrganizationsSelected(employments: Organization[]): void;
}
const ProjectOrganizationSelect: React.FC<ProjectOrganizationSelectProps> = ({
  organizations,
  organizationsSelected,
  setOrganizationsSelected,
}: ProjectOrganizationSelectProps) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const handleChange = (_: React.SyntheticEvent, value: Organization[]) => {
    console.log("New Value = ", value);
    setOrganizationsSelected(value);
  };
  return (
    <MultiSelect
      limitTags={5}
      freeSolo={false}
      sx={{ width: isMd ? 500 : "75%", backgroundColor: "white" }}
      getOptionLabel={(option: Organization): string => option.name}
      options={organizations}
      value={organizationsSelected}
      inputLabel="Organization"
      inputPlaceholder="Organization"
      onChange={handleChange}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
      renderTags={(value: Organization[], getTagProps) =>
        value.map((option: Organization, index: number) => (
          <Chip
            variant="outlined"
            label={option.name}
            {...getTagProps({ index })}
            key={option.id}
          />
        ))
      }
    />
  );
};

export default ProjectOrganizationSelect;
