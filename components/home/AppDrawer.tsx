import { Box, IconButton, SwipeableDrawer, Theme } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { noop } from "lodash";

interface AppDrawerProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen(newIsDrawerOpen: boolean): void;
}

export const CLOSE_BUTTON_ROLE = "switch";

const drawerWidth = 240;
const AppDrawer: React.FC<AppDrawerProps> = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: AppDrawerProps) => {
  const theme: Theme = useTheme();
  const isLTR = theme.direction === "ltr";
  return (
    <SwipeableDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      anchor={isLTR ? "left" : "right"}
      open={isAppDrawerOpen}
      onClose={noop}
      onOpen={noop}
    >
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <IconButton
          role={CLOSE_BUTTON_ROLE}
          onClick={() => setIsAppDrawerOpen(false)}
        >
          {isLTR ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
    </SwipeableDrawer>
  );
};

export default AppDrawer;
