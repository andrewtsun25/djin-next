import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

interface LoadingProps {
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  message = "Loading...",
}: LoadingProps) => {
  return (
    (<Backdrop open={true}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
          <CircularProgress size="50%" color="primary"></CircularProgress>
          <Typography variant="h3" sx={{
            mt: 4
          }}>
            {message}
          </Typography>
        </Box>
      </Box>
    </Backdrop>)
  );
};
