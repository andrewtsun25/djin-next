import { Box, Chip } from "@mui/material";
import React from "react";

interface SkillChipsProps {
  skills: string[];
}

const SKILL_CHIP_ROLE = "skill";

const SkillChips: React.FC<SkillChipsProps> = ({ skills }: SkillChipsProps) => {
  return skills.length > 0 ? (
    <Box display="flex" justifyContent="left" flexWrap="wrap">
      {skills.map((skill) => (
        <Chip
          label={skill}
          size="small"
          key={skill}
          role={SKILL_CHIP_ROLE}
          sx={{ m: 0.5 }}
        />
      ))}
    </Box>
  ) : null;
};

export { SKILL_CHIP_ROLE };
export default SkillChips;
export type { SkillChipsProps };
