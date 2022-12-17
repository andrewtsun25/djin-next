import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import logo from "../../public/logos/logo.png";
import Image from "next/image";

interface AppToolBarProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen(newIsDrawerOpen: boolean): void;
}

export const MENU_BUTTON_ROLE = "switch";

const AppToolBar: React.FC<AppToolBarProps> = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: AppToolBarProps) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
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
        <Link href="/">
          <Box height="100%" display="flex" alignItems="center">
            <Image src={logo} alt="d.jin website logo" width={50} height={50} />
            <Typography variant="h6" ml={1}>
              d.jin
            </Typography>
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolBar;
