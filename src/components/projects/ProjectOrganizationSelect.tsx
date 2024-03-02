import { Chip, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import { Organization } from "../../types/api";
import { MultiSelect } from "../select";

interface ProjectOrganizationSelectProps {
  organizations: Organization[];
  selectedOrganizations: Organization[];
  setSelectedOrganizations(employments: Organization[]): void;
}
export const ProjectOrganizationSelect: React.FC<
  ProjectOrganizationSelectProps
> = ({
  organizations,
  selectedOrganizations,
  setSelectedOrganizations,
}: ProjectOrganizationSelectProps) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const handleChange = (_: React.SyntheticEvent, value: Organization[]) =>
    setSelectedOrganizations(value);
  return (
    <MultiSelect
      limitTags={5}
      freeSolo={false}
      sx={{ width: isMd ? 500 : "75%", m: 1 }}
      getOptionLabel={(option: Organization): string => option.name}
      options={organizations}
      value={selectedOrganizations}
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
