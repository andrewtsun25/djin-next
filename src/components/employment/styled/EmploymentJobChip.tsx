"use client";

import { Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

const EmploymentJobChip = styled(Chip)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export default EmploymentJobChip;
