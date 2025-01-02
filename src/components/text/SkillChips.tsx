import { Box, Chip, SxProps, Theme } from "@mui/material";
import React from "react";

interface SkillChipsProps {
  skills: string[];
  sx?: SxProps<Theme>;
}

const SKILL_CHIP_ROLE = "skill";

export const SkillChips: React.FC<SkillChipsProps> = ({
  skills,
  sx,
}: SkillChipsProps) => {
  return skills.length < 1 ? null : (
    <Box
      sx={[{
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap"
      }, ...(Array.isArray(sx) ? sx : [sx])]}>
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
  );
};

export { SKILL_CHIP_ROLE };
export default SkillChips;
export type { SkillChipsProps };
