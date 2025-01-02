import DescriptionIcon from "@mui/icons-material/Description";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import { Box, Fade, Grow, Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import {
  HolisticOfficeArchitectureImage,
  HolisticOfficeLogo,
  HolisticOfficeSectionHeader,
  LinkSection,
  ModuleInfoGrid,
} from "../../../src/components/holisticOffice";
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
          <Typography component="p" sx={{ alignSelf: "flex-start" }}>
            <MuiNextLink
              href={holisticOfficeUrl}
              target="_blank"
              sx={{ color: holisticOfficeLinkColor }}
            >
              Holistic Office
            </MuiNextLink>{" "}
            is a comprehensive Electronic Health Record (EHR) and inventory
            management system tailored for small to mid-sized independent
            clinics. Developed as my graduate school project at USC under the
            course CSCI-577: Software Engineering, the project spanned from
            August 2018 to May 2019. Working within a team of 8 members, my
            primary responsibility was as the architect, overseeing the design
            process from infrastructure to framework selection. Embracing the
            need for seamless data exchange, we opted to align the system with
            FHIR (Fast Healthcare Interoperability Resources) standards. Given
            the sensitive nature of health data, ensuring compliance with HIPAA
            (Health Information Portability and Accountability Act) regulations
            was paramount. Presently, the system is deployed utilizing a static
            file server (AWS S3) in conjunction with a REST API server (AWS
            Elastic Beanstalk), facilitating communication with a relational
            database (AWS RDS).
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
            title="Documents"
            description="The documents provided encompasses a range of project facets beyond the source code itself."
            links={documentationLinks}
            icon={<DescriptionIcon />}
          />
          <LinkSection
            title="Source Code"
            description={
              'Although the current iteration of the source code will not remain accessible to the public, \
              I can distribute the source code in .zip format from the point in time USC deemed the project \
              "completed." Our source code is organized into three modules as detailed earlier. Each repository \
              includes a README file outlining the steps for local deployment.'
            }
            links={codeLinks}
            icon={<FolderSpecialIcon />}
          />
        </VerticallyCenteredPageContainer>
      </Fade>
    </Box>
  );
}
