import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, Divider, Theme, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useMemo } from "react";

import {
  DesktopDrawerCloseButtonContainer,
  DesktopDrawerContainer,
} from "../styled";
import DrawerContent from "./DrawerContent";

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
    <DesktopDrawerContainer
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      anchor={isLTR ? "left" : "right"}
      open={isAppDrawerOpen}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <DesktopDrawerCloseButtonContainer>
        <Button role={CLOSE_BUTTON_ROLE} onClick={handleClose}>
          {isLTR ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          <Typography sx={{ ml: 0.5 }}>Close</Typography>
        </Button>
      </DesktopDrawerCloseButtonContainer>
      <Divider />
      <DrawerContent />
    </DesktopDrawerContainer>
  );
};

export default DesktopDrawer;
