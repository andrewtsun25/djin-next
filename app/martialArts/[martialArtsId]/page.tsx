import { Fade, Grid, Grow, Typography } from "@mui/material";
import { isNil } from "lodash";
import { Metadata } from "next";
import React from "react";

import {
  MartialArtsBackground,
  MartialArtsStudioGridTile,
} from "../../../src/components/martialArts";
import {
  MartialArtsDescription,
  MartialArtsExperienceLevel,
  MartialArtsFigure,
  MartialArtsFigureCaption,
  MartialArtsImage,
  MartialArtsLogoImage,
  MartialArtsPageContentGrid,
  MartialArtsPageHeading,
  MartialArtsPageTitle,
  MartialArtsStudioGridSection,
  MartialArtsStudioGridTitle,
} from "../../../src/components/martialArts/styled";
import MartialArtsContentContainer from "../../../src/components/martialArts/styled/MartialArtsContentContainer";
import MartialArtsImageSection from "../../../src/components/martialArts/styled/MartialArtsImageSection";
import { ResponsiveGrid } from "../../../src/components/responsiveGrid";
import { getMartialArtsStyle } from "../../../src/dal/api";
import { MartialArtsStudio, MartialArtsStyle } from "../../../src/types/api";

interface MartialArtsPageParams {
  martialArtsId: string;
}

export async function generateStaticParams(): Promise<MartialArtsPageParams[]> {
  return [
    { martialArtsId: "itfTkd" },
    { martialArtsId: "wtTkd" },
    { martialArtsId: "hdgd" },
    { martialArtsId: "muaythai" },
    { martialArtsId: "bjj" },
  ];
}

type GenerateMetadataProps = {
  params: MartialArtsPageParams;
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  // read route params
  const martialArtsStyle: MartialArtsStyle | null = await getMartialArtsStyle(
    params.martialArtsId,
  );
  if (isNil(martialArtsStyle)) {
    throw new Error(
      `Martial Arts Style for martialArtsId ${params.martialArtsId} could not be found`,
    );
  }
  return {
    title: `d.jin - ${martialArtsStyle.name}`,
  };
}

export default async function MartialArtsPage({
  params,
}: {
  params: MartialArtsPageParams;
}): Promise<React.JSX.Element> {
  const martialArtsStyle: MartialArtsStyle | null = await getMartialArtsStyle(
    params.martialArtsId,
  );
  if (isNil(martialArtsStyle)) {
    throw new Error(
      `Martial Arts Style for martialArtsId ${params.martialArtsId} could not be found`,
    );
  }
  const {
    logoUrl,
    type,
    name,
    description,
    biography,
    expLevel,
    mediaUrl,
    mediaCaption,
    studios,
  } = martialArtsStyle;

  return (
    <MartialArtsBackground>
      <Fade in>
        <MartialArtsContentContainer maxWidth="lg">
          <MartialArtsPageHeading>
            <MartialArtsPageTitle variant="h3">{name}</MartialArtsPageTitle>
            <MartialArtsLogoImage
              src={logoUrl}
              alt={`${type}_logo`}
              height={200}
              width={200}
            />
          </MartialArtsPageHeading>
          <MartialArtsExperienceLevel variant="h5">
            Experience Level: {expLevel}
          </MartialArtsExperienceLevel>
          <MartialArtsPageContentGrid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <MartialArtsDescription paragraph>
                {description}
              </MartialArtsDescription>
              {biography.map((paragraph: string, index: number) => (
                <Typography paragraph key={index}>
                  {paragraph}
                </Typography>
              ))}
            </Grid>
            <MartialArtsImageSection item xs={12} lg={6}>
              <Grow in>
                <MartialArtsFigure component="figure">
                  <MartialArtsImage
                    src={mediaUrl}
                    alt={`${type}_img`}
                    height={1400}
                    width={1600}
                  />
                  <MartialArtsFigureCaption>
                    <Typography variant="subtitle1" align="center">
                      {mediaCaption}
                    </Typography>
                  </MartialArtsFigureCaption>
                </MartialArtsFigure>
              </Grow>
            </MartialArtsImageSection>
          </MartialArtsPageContentGrid>
          <MartialArtsStudioGridSection>
            <MartialArtsStudioGridTitle variant="h2">
              Studios
            </MartialArtsStudioGridTitle>
            <ResponsiveGrid>
              {studios.map((studio: MartialArtsStudio) => (
                <MartialArtsStudioGridTile studio={studio} key={studio.name} />
              ))}
            </ResponsiveGrid>
          </MartialArtsStudioGridSection>
        </MartialArtsContentContainer>
      </Fade>
    </MartialArtsBackground>
  );
}
