import { Grow, Typography } from "@mui/material";
import React from "react";

import { HolisticOfficeModule } from "../../../types/api";
import { HolisticOfficeModulePaper } from "../styled";

interface ModuleInfoProps {
  module: HolisticOfficeModule;
}

const ModuleInfo: React.FC<ModuleInfoProps> = ({
  module: { name, components },
}: ModuleInfoProps) => {
  return (
    <Grow in>
      <HolisticOfficeModulePaper elevation={5}>
        <Typography variant="h5" align="center">
          {name}
        </Typography>
        <ul>
          {Object.entries(components).map(([key, value]) => (
            <li key={key}>
              <Typography>
                <b>{key}:</b> {value}
              </Typography>
            </li>
          ))}
        </ul>
      </HolisticOfficeModulePaper>
    </Grow>
  );
};

export default ModuleInfo;
