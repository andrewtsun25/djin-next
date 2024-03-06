import { Grid, Typography } from "@mui/material";
import React from "react";

import { Employment } from "../../types/api";
import { EmploymentCard } from "./EmploymentCard";

interface EmploymentGridProps {
  employments: Employment[];
}

export const EmploymentGrid: React.FC<EmploymentGridProps> = ({
  employments,
}: EmploymentGridProps) => {
  return employments.length > 0 ? (
    <Grid container direction="row" spacing={2}>
      {employments.map((employment, index) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
          <EmploymentCard employment={employment} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography textAlign="center">No employments to display.</Typography>
  );
};
