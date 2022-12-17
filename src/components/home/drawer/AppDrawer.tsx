import {
  Box,
  IconButton,
  List,
  SwipeableDrawer,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import AlbumIcon from "@mui/icons-material/Album";
import CodeIcon from "@mui/icons-material/Code";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import React, { useMemo } from "react";
import { useTheme } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import SchoolIcon from "@mui/icons-material/School";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WorkIcon from "@mui/icons-material/Work";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { noop } from "lodash";
import CollapsibleList from "./CollapsibleList";
import HyperLinkListItem from "./HyperLinkListItem";
import {
  FistIcon,
  KatanaIcon,
  MusicScoreIcon,
  TaekwondoIcon,
} from "../../icons";

interface AppDrawerProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen(newIsDrawerOpen: boolean): void;
}

export const CLOSE_BUTTON_ROLE = "switch";

const drawerWidth = 300;

const internalLinkStyle: SxProps<Theme> = { pl: 6 };
const AppDrawer: React.FC<AppDrawerProps> = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: AppDrawerProps) => {
  const theme: Theme = useTheme();
  const isLTR = useMemo(() => theme.direction === "ltr", [theme]);

  return (
    <SwipeableDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      anchor={isLTR ? "left" : "right"}
      open={isAppDrawerOpen}
      onClose={noop}
      onOpen={noop}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        pt={0.5}
        pr={1.5}
        pb={0.5}
      >
        <IconButton
          role={CLOSE_BUTTON_ROLE}
          onClick={() => setIsAppDrawerOpen(false)}
        >
          {isLTR ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Typography>Close</Typography>
      </Box>
      <List>
        <CollapsibleList icon={<CodeIcon />} name="Coding">
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<WorkIcon />}
            text="Employment"
            to="/coding/employment"
          />
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<SchoolIcon />}
            text="Education"
            to="/coding/education"
          />
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<AppsIcon />}
            text="Projects"
            to="/coding/projects"
          />
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<LinkedInIcon />}
            text="LinkedIn"
            to="https://linkedin.com/in/andrewtsun25"
            target="_blank"
          />
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<GitHubIcon />}
            text="GitHub"
            to="https://github.com/andrewtsun25"
            target="_blank"
          />
        </CollapsibleList>
        <CollapsibleList icon={<HeadphonesIcon />} name={"Music"}>
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<SchoolIcon />}
            text={"Education"}
            to="/music/education"
          />
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<AlbumIcon />}
            text={"EDM"}
            to="/music/edm"
          />
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<MusicScoreIcon />}
            text={"Classical"}
            to="/music/classical"
          />
        </CollapsibleList>
        <CollapsibleList icon={<SportsMmaIcon />} name="Martial Arts">
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<FistIcon />}
            text="ITF Taekwondo"
            to="/martialArts/itf"
          />
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<TaekwondoIcon />}
            text="WT Taekwondo"
            to="/martialArts/wt"
          />
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<KatanaIcon />}
            text="Haidong Gumdo"
            to="/martialArts/hdgd"
          />
        </CollapsibleList>
        <CollapsibleList icon={<SchoolIcon />} name={"Academic Work"}>
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<LocalHospitalIcon />}
            text="HBV Research"
            to="academic/hbv"
          />
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<LocalPharmacyIcon />}
            text="Holistic Office"
            to="academic/holisticOffice"
          />
          <HyperLinkListItem
            sx={internalLinkStyle}
            icon={<SportsEsportsIcon />}
            text={"Reclaimer"}
            to="academic/Reclaimer"
          />
        </CollapsibleList>
      </List>
    </SwipeableDrawer>
  );
};

export default AppDrawer;
