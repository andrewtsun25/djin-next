import React from "react";

import { SkillChip, SkillChipContainer } from "./styled";

interface SkillChipsProps {
  skills: string[];
}

const SKILL_CHIP_ROLE = "skill";

const SkillChips: React.FC<SkillChipsProps> = ({ skills }: SkillChipsProps) => {
  return skills.length > 0 ? (
    <SkillChipContainer>
      {skills.map((skill) => (
        <SkillChip
          label={skill}
          size="small"
          key={skill}
          role={SKILL_CHIP_ROLE}
        />
      ))}
    </SkillChipContainer>
  ) : null;
};

export { SKILL_CHIP_ROLE };
export default SkillChips;
export type { SkillChipsProps };
