"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const EmploymentBackButton: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/coding/employment");
  };
  return (
    <Button variant="contained" sx={{ mb: 2 }} onClick={handleClick}>
      <ChevronLeftIcon />
      <Typography ml={0.5}>Back to Coding Employment</Typography>
    </Button>
  );
};
