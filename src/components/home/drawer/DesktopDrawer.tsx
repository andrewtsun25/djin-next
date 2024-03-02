import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Divider,
  SwipeableDrawer,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useMemo } from "react";

import DrawerContent from "./DrawerContent";

const appDrawerWidth = 400;

interface AppDrawerProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen(newIsDrawerOpen: boolean): void;
}

export const CLOSE_BUTTON_ROLE = "switch";

const drawerWidth = 300;

const DesktopDrawer: React.FC<AppDrawerProps> = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: AppDrawerProps) => {
  const theme: Theme = useTheme();
  const isLTR = useMemo(() => theme.direction === "ltr", [theme]);
  const handleOpen = () => setIsAppDrawerOpen(true);
  const handleClose = () => setIsAppDrawerOpen(false);

  return (
    <SwipeableDrawer
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        width: appDrawerWidth,
        flexShrink: 0,
      }}
      anchor={isLTR ? "left" : "right"}
      open={isAppDrawerOpen}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        py={0.75}
        pr={1.5}
      >
        <Button role={CLOSE_BUTTON_ROLE} onClick={handleClose}>
          {isLTR ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          <Typography sx={{ ml: 0.5 }}>Close</Typography>
        </Button>
      </Box>
      <Divider />
      <DrawerContent />
    </SwipeableDrawer>
  );
};

export default DesktopDrawer;
