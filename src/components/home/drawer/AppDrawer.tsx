import { Button, Divider, List, Theme, Typography } from "@mui/material";
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
  StorybookIcon,
  TaekwondoIcon,
} from "../../icons";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import {
  AppDrawerCloseButtonContainer,
  AppDrawerContainer,
  CollapsibleListHyperLinkListItem,
} from "../styled";

interface AppDrawerProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen(newIsDrawerOpen: boolean): void;
}

export const CLOSE_BUTTON_ROLE = "switch";

const drawerWidth = 300;

const AppDrawer: React.FC<AppDrawerProps> = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: AppDrawerProps) => {
  const theme: Theme = useTheme();
  const isLTR = useMemo(() => theme.direction === "ltr", [theme]);

  return (
    <AppDrawerContainer
      sx={{
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
      <AppDrawerCloseButtonContainer>
        <Button
          role={CLOSE_BUTTON_ROLE}
          onClick={() => setIsAppDrawerOpen(false)}
        >
          {isLTR ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          <Typography sx={{ ml: 0.5 }}>Close</Typography>
        </Button>
      </AppDrawerCloseButtonContainer>
      <List>
        <CollapsibleList icon={<CodeIcon />} name="Coding">
          <CollapsibleListHyperLinkListItem
            icon={<WorkIcon />}
            text="Employment"
            to="/coding/employment"
          />
          <CollapsibleListHyperLinkListItem
            icon={<SchoolIcon />}
            text="Education"
            to="/coding/education"
          />
          <CollapsibleListHyperLinkListItem
            icon={<AppsIcon />}
            text="Projects"
            to="/coding/projects"
          />
          <CollapsibleListHyperLinkListItem
            icon={<LinkedInIcon />}
            text="LinkedIn"
            to="https://linkedin.com/in/andrewtsun25"
            target="_blank"
          />
          <CollapsibleListHyperLinkListItem
            icon={<GitHubIcon />}
            text="GitHub"
            to="https://github.com/andrewtsun25"
            target="_blank"
          />
        </CollapsibleList>
        <CollapsibleList icon={<HeadphonesIcon />} name={"Music"}>
          <CollapsibleListHyperLinkListItem
            icon={<SchoolIcon />}
            text={"Education"}
            to="/music/education"
          />
          <CollapsibleListHyperLinkListItem
            icon={<AlbumIcon />}
            text={"EDM"}
            to="/music/edm"
          />
          <CollapsibleListHyperLinkListItem
            icon={<MusicScoreIcon />}
            text={"Classical"}
            to="/music/classical"
          />
          <CollapsibleListHyperLinkListItem
            icon={<HeadphonesIcon />}
            text={"SoundCloud"}
            to="https://soundcloud.com/djtaeyong"
          />
        </CollapsibleList>
        <CollapsibleList icon={<SportsMmaIcon />} name="Martial Arts">
          <CollapsibleListHyperLinkListItem
            icon={<FistIcon />}
            text="ITF Taekwondo"
            to="/martialArts/itf"
          />
          <CollapsibleListHyperLinkListItem
            icon={<TaekwondoIcon />}
            text="WT Taekwondo"
            to="/martialArts/wt"
          />
          <CollapsibleListHyperLinkListItem
            icon={<KatanaIcon />}
            text="Haidong Gumdo"
            to="/martialArts/hdgd"
          />
        </CollapsibleList>
        <CollapsibleList icon={<SchoolIcon />} name={"Academic Work"}>
          <CollapsibleListHyperLinkListItem
            icon={<LocalHospitalIcon />}
            text="HBV Research"
            to="academic/hbv"
          />
          <CollapsibleListHyperLinkListItem
            icon={<LocalPharmacyIcon />}
            text="Holistic Office"
            to="academic/holisticOffice"
          />
          <CollapsibleListHyperLinkListItem
            icon={<SportsEsportsIcon />}
            text={"Reclaimer"}
            to="academic/Reclaimer"
          />
        </CollapsibleList>
        <Divider />
        <HyperLinkListItem
          icon={<ContactMailIcon />}
          text="Contact"
          to="mailto:djtaeyong@gmail.com"
        />
        <HyperLinkListItem
          icon={<StorybookIcon />}
          text="Site Storybook"
          to="https://storybook.djin.dev/"
        />
      </List>
    </AppDrawerContainer>
  );
};

export default AppDrawer;
