import { Container, Fade } from "@mui/material";
import { Metadata } from "next";
import React from "react";

import {
  HbvContentTypography,
  HbvLink,
  HbvResearchCard,
  HbvTitle,
} from "../../../src/components/hbv";
import { ImageBackground } from "../../../src/components/layout";
import { Urls } from "../../../src/const/url";
import { listHbvResearchPapers } from "../../../src/dal/api";
import { HbvResearchPaper } from "../../../src/types/api";

const bgUrl: string = `${Urls.AssetRoot}/hbvResearch/bg/team_hbv_bg.png`;
const hepBLink: string =
  "https://med.stanford.edu/liver/education/whatishepb.html";
const hepBJade = "#308575";

export const metadata: Metadata = {
  title: "d.jin - HBV Research",
};

export default async function HbvResearchPage(): Promise<React.JSX.Element> {
  const hbvResearchPapers: HbvResearchPaper[] = await listHbvResearchPapers();
  return (
    <>
      <ImageBackground src={bgUrl} backgroundColor={hepBJade} />
      <Fade in>
        <Container maxWidth="lg" sx={{ p: 2 }}>
          <HbvTitle variant="h2" align="center">
            Hepatitis B Research
          </HbvTitle>
          <HbvContentTypography sx={{ fontStyle: "italic" }}>
            Hepatitis B Virus (HBV) is a chronic liver disease that, once
            contracted, becomes untreatable, often leading to severe
            complications such as liver cirrhosis, liver failure, or liver
            cancer. HBV is notoriously difficult to detect early due to its
            asymptomatic nature, and by the time symptoms manifest, treatment
            effectiveness is greatly diminished. Unlike COVID-19, HBV
            transmission occurs primarily through birth (from mother to child),
            direct contact with infected blood, or unprotected sexual
            intercourse with an HBV-positive individual. However, HBV is
            preventable through vaccination, offering significant protection
            against its onset.
          </HbvContentTypography>
          <HbvContentTypography sx={{ fontStyle: "italic" }}>
            Despite the availability of a vaccine, an alarming 257 million
            people worldwide are infected with HBV, far surpassing the estimated
            38 million individuals affected by AIDS. Yet, media coverage and
            efforts to combat HBV remain disproportionately low compared to
            those directed towards AIDS prevention. In the United States, HBV
            disproportionately affects Asian Americans, with 1 in 12 Asians
            infected compared to 1 in 1000 non-Hispanic Caucasians. Asian
            Americans make up over half of the 1.2 - 2 million individuals
            infected with HBV, highlighting one of the most significant racial
            health disparities in the country.
          </HbvContentTypography>
          <HbvContentTypography sx={{ fontStyle: "italic" }}>
            Further information regarding Hepatitis B and its disproportionate
            impact on Asian Americans can be found{" "}
            <HbvLink href={hepBLink} target="_blank" rel="noopener noreferrer">
              here
            </HbvLink>
            .
          </HbvContentTypography>
          <HbvContentTypography>
            In my personal experience, my maternal grandmother succumbed to
            Hepatitis B during my middle school years. Motivated by her
            suffering and determined to prevent others from enduring similar
            hardships, I participated in a youth leadership course at the
            Stanford Asian Liver Center. This organization raises awareness
            about the severity of HBV and the disproportionate impact it has on
            Asian communities, both globally and within the US. Inspired by the
            potential to save lives through advocacy for screening and
            vaccination, I joined Team HBV, the high school and collegiate
            outreach division of the Stanford Asian Liver Center.
          </HbvContentTypography>
          <HbvContentTypography>
            Although I could not establish a chapter at my high school, I
            remained engaged by volunteering independently and collaborating
            with members from other Team HBV chapters. Upon entering UCSD for
            college, I seized the opportunity to lead the Team HBV chapter
            there. Partnering with the Asian Pacific Health Foundation, a local
            health organization offering Hepatitis B screenings and vaccinations
            to Asian populations in San Diego, provided me with valuable
            opportunities for undergraduate research and community involvement.
          </HbvContentTypography>
          {hbvResearchPapers.map((hbvResearchPaper: HbvResearchPaper) => (
            <HbvResearchCard
              hbvResearchPaper={hbvResearchPaper}
              key={hbvResearchPaper.name}
            />
          ))}
        </Container>
      </Fade>
    </>
  );
}
