import { Grid2 } from "@mui/material";
import React from "react";

import { HolisticOfficeModule } from "../../../types/api";
import ModuleInfo from "./ModuleInfo";

interface ModulesGridProps {
  modules: HolisticOfficeModule[];
}

const ModuleInfoGrid: React.FC<ModulesGridProps> = ({
  modules,
}: ModulesGridProps) => {
  return modules.length < 1 ? null : (
    <Grid2 container spacing={2}>
      {modules.map((module) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={module.name}>
          <ModuleInfo module={module} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ModuleInfoGrid;
