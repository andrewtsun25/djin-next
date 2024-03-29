import { Grow, Paper, Typography } from "@mui/material";
import { isEmpty, map } from "lodash";
import React from "react";

import { HolisticOfficeModule } from "../../../types/api";

interface ModuleInfoProps {
  module: HolisticOfficeModule;
}

const ModuleInfo: React.FC<ModuleInfoProps> = ({
  module: { name, components },
}: ModuleInfoProps) => {
  return (
    <Grow in>
      <Paper elevation={5} sx={{ p: 2.5, height: "100%" }}>
        <Typography variant="h5" align="center">
          {name}
        </Typography>
        <ul>
          {!isEmpty(components) &&
            map(components, (technologies, category) => (
              <li key={category}>
                <Typography>
                  <b>{category}:</b> {technologies}
                </Typography>
              </li>
            ))}
        </ul>
      </Paper>
    </Grow>
  );
};

export default ModuleInfo;
