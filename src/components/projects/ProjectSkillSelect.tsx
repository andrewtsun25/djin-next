import React from "react";
import { MultiSelect } from "../select";
import { useMediaQuery, useTheme } from "@mui/material";

interface ProjectSkillSelectProps {
  skills: string[];
  selectedSkills: string[];
  setSelectedSkills(skills: string[]): void;
}
const ProjectSkillSelect: React.FC<ProjectSkillSelectProps> = ({
  skills,
  selectedSkills,
  setSelectedSkills,
}: ProjectSkillSelectProps) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const handleChange = (_: React.SyntheticEvent, value: string[]) =>
    setSelectedSkills(value);
  return (
    <MultiSelect
      limitTags={5}
      freeSolo={false}
      sx={{ width: isMd ? 500 : "75%", m: 1 }}
      options={skills}
      value={selectedSkills}
      inputLabel="Skills"
      inputPlaceholder="Skills"
      onChange={handleChange}
    />
  );
};

export default ProjectSkillSelect;
