import { Fade, Grow, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  HolisticOfficeBackground,
  HolisticOfficeImage,
  HolisticOfficeImageLink,
  HolisticOfficeImageLinkImage,
  HolisticOfficeLink,
  HolisticOfficePageContainer,
  HolisticOfficePageHeading,
} from "../../../src/components/holisticOffice";
import { Urls } from "../../../src/const/url";

const logoUrl = `${Urls.AssetRoot}/holisticOffice/logo/holistic_office_logo.png`;
const websiteImg = `${Urls.AssetRoot}/holisticOffice/img/holistic_office_website.png`;
const architectureImg = `${Urls.AssetRoot}/holisticOffice/img/holistic_office_architecture.png`;
const holisticOfficeUrl = "https://www.holisticoffice.biz/";

const HolisticOfficePage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <HolisticOfficeBackground>
      <Fade in>
        <HolisticOfficePageContainer maxWidth="lg">
          <HolisticOfficeImageLink href={holisticOfficeUrl} target="_blank">
            <HolisticOfficeImageLinkImage
              src={logoUrl}
              alt="Holistic Office Logo"
              height={165}
              width={1000}
            />
          </HolisticOfficeImageLink>
          <Grow in>
            <HolisticOfficeImage
              src={websiteImg}
              alt="Holistic Office Website Image"
              height={556}
              width={1000}
            />
          </Grow>
          <Typography paragraph>
            <HolisticOfficeLink href={holisticOfficeUrl} target="_blank">
              Holistic Office
            </HolisticOfficeLink>{" "}
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
          <HolisticOfficePageHeading
            variant={isSmall ? "h3" : "h2"}
            align="center"
          >
            Architecture
          </HolisticOfficePageHeading>
          <Grow in>
            <HolisticOfficeImage
              src={architectureImg}
              alt="Holistic Office Architecture Diagram"
              width={1044}
              height={464}
            />
          </Grow>
          {/*<ModulesGrid />
          <LinkSection
            title="Documentation"
            description="The provided documentation cover various aspects of the project besides raw code."
            linkType={HolisticOfficeLinkType.Documentation}
            icon={<DescriptionIcon />}
          />
          <LinkSection
            title="Source Code"
            description="While the current version of the source code will no longer be open to the public, I am able to release
                the source code in .zip format at the point of time when this project is considered “completed” by USC.
                Our source code is divided into 3 modules as listed above. Each repository has a README on how to
                perform local deployment."
            linkType={HolisticOfficeLinkType.Code}
            icon={<FolderSpecialIcon />}
          />*/}
        </HolisticOfficePageContainer>
      </Fade>
    </HolisticOfficeBackground>
  );
};

export default HolisticOfficePage;
