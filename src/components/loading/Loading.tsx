import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

interface LoadingProps {
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  message = "Loading...",
}: LoadingProps) => {
  return (
    <Backdrop open={true}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <CircularProgress size="50%" color="primary"></CircularProgress>
          <Typography variant="h3" mt={4}>
            {message}
          </Typography>
        </Box>
      </Box>
    </Backdrop>
  );
};
