import { SwipeableDrawer } from "@mui/material";
import React from "react";

import {
  MobileDrawerHandle,
  MobileDrawerHandleText,
  MobileDrawerPuller,
} from "../styled";
import DrawerContent from "./DrawerContent";

export const DRAWER_EDGE = 56;

interface MobileDrawerProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen(newIsDrawerOpen: boolean): void;
}

const MobileDrawer = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: MobileDrawerProps) => {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor="bottom"
      open={isAppDrawerOpen}
      onClose={() => setIsAppDrawerOpen(false)}
      onOpen={() => setIsAppDrawerOpen(true)}
      swipeAreaWidth={DRAWER_EDGE}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <MobileDrawerHandle>
        <MobileDrawerPuller />
        <MobileDrawerHandleText>
          Pull up for site navigation
        </MobileDrawerHandleText>
      </MobileDrawerHandle>
      <DrawerContent />
    </SwipeableDrawer>
  );
};

export default MobileDrawer;
