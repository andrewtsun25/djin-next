"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/logos/logo.png";
import { HomeLinkText } from "./styled";

interface AppToolBarProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen(newIsDrawerOpen: boolean): void;
}

export const MENU_BUTTON_ROLE = "switch";

const AppToolBar: React.FC<AppToolBarProps> = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: AppToolBarProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <AppBar position={"sticky"}>
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
          <Box display="flex" alignItems="center">
            <Image src={logo} alt="d.jin website logo" height={50} width={50} />
            <HomeLinkText variant="h5">d.jin</HomeLinkText>
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export { AppToolBar };
