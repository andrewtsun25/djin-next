import React, { PropsWithChildren, useState } from "react";
import { CssBaseline } from "@mui/material";
import { AppDrawer, AppToolBar } from "../home";

const SiteLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAppDrawerOpen, setIsAppDrawerOpen] = useState(false);
  return (
    <>
      <CssBaseline />
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
      <AppDrawer
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
      {children}
    </>
  );
};

export default SiteLayout;
