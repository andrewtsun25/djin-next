import DescriptionIcon from "@mui/icons-material/Description";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import { Box, Fade, Grow, Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import {
  HolisticOfficeArchitectureImage,
  HolisticOfficeLogo,
  HolisticOfficeSectionHeader,
} from "../../../src/components/holisticOffice";
import { LinkSection } from "../../../src/components/holisticOffice/linkSection";
import { ModuleInfoGrid } from "../../../src/components/holisticOffice/modulesGrid";
import { VerticallyCenteredPageContainer } from "../../../src/components/layout";
import { MuiNextLink } from "../../../src/components/text";
import { Urls } from "../../../src/const/url";
import {
  listHolisticOfficeLinks,
  listHolisticOfficeModules,
} from "../../../src/dal/api";
import {
  HolisticOfficeLink,
  HolisticOfficeLinkType,
  HolisticOfficeModule,
} from "../../../src/types/api";

const holisticOfficeLinkColor = "#308575";
const logoUrl = `${Urls.AssetRoot}/holisticOffice/logo/holistic_office_logo.png`;
const websiteImg = `${Urls.AssetRoot}/holisticOffice/img/holistic_office_website.png`;
const architectureImg = `${Urls.AssetRoot}/holisticOffice/img/holistic_office_architecture.png`;
const holisticOfficeUrl = "https://www.holisticoffice.biz/";

export const metadata: Metadata = {
  title: "d.jin - Holistic Office",
};

const holisticOfficeGreen = "#e2f1e9";

export default async function HolisticOfficePage(): Promise<React.JSX.Element> {
  const holisticOfficeLinks: HolisticOfficeLink[] =
    await listHolisticOfficeLinks();
  const holisticOfficeModules: HolisticOfficeModule[] =
    await listHolisticOfficeModules();
  const codeLinks: HolisticOfficeLink[] = holisticOfficeLinks.filter(
    ({ type }: HolisticOfficeLink) => type === HolisticOfficeLinkType.Code,
  );
  const documentationLinks: HolisticOfficeLink[] = holisticOfficeLinks.filter(
    ({ type }: HolisticOfficeLink) =>
      type === HolisticOfficeLinkType.Documentation,
  );
  return (
    <Box sx={{ backgroundColor: holisticOfficeGreen }}>
      <Fade in>
        <VerticallyCenteredPageContainer maxWidth="lg">
          <MuiNextLink href={holisticOfficeUrl} target="_blank" sx={{ my: 2 }}>
            <HolisticOfficeLogo
              src={logoUrl}
              alt="Holistic Office Logo"
              height={165}
              width={1000}
            />
          </MuiNextLink>
          <Grow in>
            <HolisticOfficeArchitectureImage
              src={websiteImg}
              alt="Holistic Office Website Image"
              height={556}
              width={1000}
            />
          </Grow>
          <Typography paragraph sx={{ alignSelf: "flex-start" }}>
            <MuiNextLink
              href={holisticOfficeUrl}
              target="_blank"
              sx={{ color: holisticOfficeLinkColor }}
            >
              Holistic Office
            </MuiNextLink>{" "}
            is a patient EHR (Electronic Health Record) management and inventory
            management system for small to mid-sized independent clinics, and
            also my graduate school project at USC (listed as CSCI-577: Software
            Engineering), developed from August 2018 to May 2019. With a team of
            8, my main role in the project is the architect, designing
            everything from infrastructure to frameworks used. We decided to
            have the site conform to FHIR (Fast Healthcare Interoperability
            Resources) data handling standards. As with any health-related
            software, it needs to be HIPAA (Health Information Portability and
            Accountability Act) compliant. Currently it is deployed as a static
            file server (AWS S3) and a REST API server (AWS Elastic Beanstalk)
            that talks to a relational database (AWS RDS).
          </Typography>
          <HolisticOfficeSectionHeader variant="h2" align="center">
            Architecture
          </HolisticOfficeSectionHeader>
          <Grow in>
            <HolisticOfficeArchitectureImage
              src={architectureImg}
              alt="Holistic Office Architecture Diagram"
              width={1044}
              height={464}
            />
          </Grow>
          <ModuleInfoGrid modules={holisticOfficeModules} />
          <LinkSection
            title="Documentation"
            description="The provided documentation cover various aspects of the project besides raw code."
            links={documentationLinks}
            icon={<DescriptionIcon />}
          />
          <LinkSection
            title="Source Code"
            description="While the current version of the source code will no longer be open to the public, I am able to release
              the source code in .zip format at the point of time when this project is considered “completed” by USC.
              Our source code is divided into 3 modules as listed above. Each repository has a README on how to
              perform local deployment."
            links={codeLinks}
            icon={<FolderSpecialIcon />}
          />
        </VerticallyCenteredPageContainer>
      </Fade>
    </Box>
  );
}
