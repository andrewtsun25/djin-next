import { Grid } from "@mui/material";
import React from "react";

import { HolisticOfficeModule } from "../../../types/api";
import ModuleInfo from "./ModuleInfo";

interface ModulesGridProps {
  modules: HolisticOfficeModule[];
}

const ModuleInfoGrid: React.FC<ModulesGridProps> = ({
  modules,
}: ModulesGridProps) => {
  return (
    <Grid container spacing={3}>
      {modules.map((module) => (
        <Grid item xs={12} sm={6} md={4} key={module.name}>
          <ModuleInfo module={module} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ModuleInfoGrid;
