"use client";

import { Global } from "@emotion/react";
import { CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";

import { AppToolBar, DesktopDrawer } from "../home";
import MobileDrawer, { DRAWER_EDGE } from "../home/drawer/MobileDrawer";

const SiteLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAppDrawerOpen, setIsAppDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <CssBaseline />
      {isMobile && (
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(50% - ${DRAWER_EDGE}px)`,
              overflow: "visible",
            },
          }}
        />
      )}
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
      {isMobile ? (
        <MobileDrawer
          isAppDrawerOpen={isAppDrawerOpen}
          setIsAppDrawerOpen={setIsAppDrawerOpen}
        />
      ) : (
        <DesktopDrawer
          isAppDrawerOpen={isAppDrawerOpen}
          setIsAppDrawerOpen={setIsAppDrawerOpen}
        />
      )}
      {children}
    </>
  );
};

export { SiteLayout };
