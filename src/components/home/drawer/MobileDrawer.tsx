import { SwipeableDrawer } from "@mui/material";
import React from "react";

import {
  MobileDrawerHandle,
  MobileDrawerHandleText,
  MobileDrawerPuller,
} from "../styled";
import { DrawerContent } from "./DrawerContent";

export const mobileDrawerEdge = 50;

interface MobileDrawerProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen(newIsDrawerOpen: boolean): void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: MobileDrawerProps) => {
  const handleClose = () => setIsAppDrawerOpen(false);
  const handleOpen = () => setIsAppDrawerOpen(true);
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor="bottom"
      open={isAppDrawerOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      swipeAreaWidth={mobileDrawerEdge}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <MobileDrawerHandle>
        <MobileDrawerPuller />
        <MobileDrawerHandleText>
          {isAppDrawerOpen
            ? "Pull down to close"
            : "Pull up for site navigation"}
        </MobileDrawerHandleText>
      </MobileDrawerHandle>
      <DrawerContent />
    </SwipeableDrawer>
  );
};
