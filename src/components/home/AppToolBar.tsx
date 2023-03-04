import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import logo from "../../../public/logos/logo.png";
import { AppToolBarBrandContainer, AppToolBarLogo } from "./styled";

interface AppToolBarProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen(newIsDrawerOpen: boolean): void;
}

export const MENU_BUTTON_ROLE = "switch";

const pathsWithFixedPosition = ["/"];

const AppToolBar: React.FC<AppToolBarProps> = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: AppToolBarProps) => {
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const shouldBeFixed = pathsWithFixedPosition.some(
    (path) => router.asPath === path
  );
  return (
    <AppBar position={shouldBeFixed ? "fixed" : "sticky"}>
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
        <Link href="/">
          <AppToolBarBrandContainer>
            <AppToolBarLogo src={logo} alt="d.jin website logo" />
            <Typography variant="h5" ml={1.5}>
              d.jin
            </Typography>
          </AppToolBarBrandContainer>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolBar;
