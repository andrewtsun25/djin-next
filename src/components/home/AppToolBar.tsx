import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

import logo from "../../../public/logos/logo.png";
import {
  AppToolBarBrandContainer,
  AppToolBarLogo,
  HomeLinkText,
} from "./styled";

interface AppToolBarProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen(newIsDrawerOpen: boolean): void;
}

export const MENU_BUTTON_ROLE = "switch";

const pathsWithFixedAppToolbar = ["/"];

const AppToolBar: React.FC<AppToolBarProps> = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: AppToolBarProps) => {
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isAppToolbarPositionFixed = useMemo(
    () => pathsWithFixedAppToolbar.some((path) => router.asPath === path),
    [router],
  );
  return (
    <AppBar position={isAppToolbarPositionFixed ? "fixed" : "sticky"}>
      <Toolbar>
        {isDesktop && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            role={MENU_BUTTON_ROLE}
            onClick={() => setIsAppDrawerOpen(true)}
            edge="start"
            sx={{ mr: 2, ...(isAppDrawerOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Link href="/" style={{ textDecoration: "none" }}>
          <AppToolBarBrandContainer>
            <AppToolBarLogo src={logo} alt="d.jin website logo" />
            <HomeLinkText variant="h5">d.jin</HomeLinkText>
          </AppToolBarBrandContainer>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolBar;
