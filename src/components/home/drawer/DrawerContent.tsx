import AlbumIcon from "@mui/icons-material/Album";
import AppsIcon from "@mui/icons-material/Apps";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from "@mui/icons-material/GitHub";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Divider, List } from "@mui/material";
import React from "react";

import {
  BjjIcon,
  FistIcon,
  KatanaIcon,
  MuayThaiIcon,
  MusicScoreIcon,
  TaekwondoIcon,
} from "../../icons";
import { CollapsibleListHyperLinkListItem } from "../styled";
import { CollapsibleList } from "./CollapsibleList";
import { HyperLinkListItem } from "./HyperLinkListItem";

export const DrawerContent: React.FC = () => {
  return (
    (<Box
      sx={{
        height: "100%",
        overflow: "auto"
      }}>
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
            target="_blank"
          />
        </CollapsibleList>
        <CollapsibleList icon={<SportsMmaIcon />} name="Martial Arts">
          <CollapsibleListHyperLinkListItem
            icon={<MuayThaiIcon />}
            text="Muay Thai"
            to="/martialArts/muaythai"
          />
          <CollapsibleListHyperLinkListItem
            icon={<BjjIcon />}
            text="Brazilian Jiu-Jitsu"
            to="/martialArts/bjj"
          />
          <CollapsibleListHyperLinkListItem
            icon={<TaekwondoIcon />}
            text="WT Taekwondo"
            to="/martialArts/wtTkd"
          />
          <CollapsibleListHyperLinkListItem
            icon={<KatanaIcon />}
            text="Haidong Gumdo"
            to="/martialArts/hdgd"
          />
          <CollapsibleListHyperLinkListItem
            icon={<FistIcon />}
            text="ITF Taekwondo"
            to="/martialArts/itfTkd"
          />
        </CollapsibleList>
        <CollapsibleList icon={<SchoolIcon />} name={"Academic Work"}>
          <CollapsibleListHyperLinkListItem
            icon={<LocalHospitalIcon />}
            text="HBV Research"
            to="/academic/hbv"
          />
          <CollapsibleListHyperLinkListItem
            icon={<LocalPharmacyIcon />}
            text="Holistic Office"
            to="/academic/holisticOffice"
          />
          <CollapsibleListHyperLinkListItem
            icon={<SportsEsportsIcon />}
            text={"Reclaimer"}
            to="/academic/reclaimer"
          />
        </CollapsibleList>
        <Divider />
        <HyperLinkListItem
          icon={<ContactMailIcon />}
          text="Contact"
          to="mailto:djtaeyong@gmail.com"
          target="_blank"
        />
        {/* TODO: re-enable Storybook Icon once storybook is enabled */}
        {/* <HyperLinkListItem
          icon={<StorybookIcon />}
          text="Site Storybook"
          to="https://storybook.djin.dev/"
          target="_blank"
        /> */}
      </List>
    </Box>)
  );
};
