import { Box, Fade, Grid, Grow, Typography } from "@mui/material";
import { isNil } from "lodash";
import { Metadata } from "next";
import React from "react";

import {
  FullWidthImage,
  ImageBackground,
  PageContainer,
} from "../../../src/components/layout";
import {
  MartialArtsLogoImage,
  MartialArtsStudioGridTile,
} from "../../../src/components/martialArts";
import { ResponsiveGrid } from "../../../src/components/responsiveGrid";
import { Urls } from "../../../src/const/url";
import { getMartialArtsStyle } from "../../../src/dal/api";
import { MartialArtsStudio, MartialArtsStyle } from "../../../src/types/api";

interface MartialArtsPageParams {
  martialArtsId: string;
}

const bgUrl: string = `${Urls.AssetRoot}/martialArts/bg/mma_cage_bg.jpg`;

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
    <>
      <ImageBackground src={bgUrl} />
      <Fade in>
        <PageContainer
          maxWidth="lg"
          sx={{ backgroundColor: "rgba(255, 255, 255, .75)" }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <Typography variant="h2" mb={2} textAlign="center">
              {name}
            </Typography>
            <MartialArtsLogoImage
              src={logoUrl}
              alt={`${type}_logo`}
              height={200}
              width={200}
            />
            <Typography sx={{ fontSize: "1.5rem" }} mt={2}>
              Exp Level: {expLevel}
            </Typography>
          </Box>
          <Grid container spacing={2} whiteSpace="pre-line" mb={2}>
            <Grid item xs={12} lg={6}>
              <Typography paragraph fontStyle="italic">
                {description}
              </Typography>
              {biography.map((paragraph: string, index: number) => (
                <Typography paragraph key={index}>
                  {paragraph}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} lg={6} display="flex" alignItems="center">
              <Grow in>
                <Box
                  component="figure"
                  sx={{
                    marginBlockStart: 0,
                    marginBlockEnd: 0,
                    marginInlineStart: 0,
                    marginInlineEnd: 0,
                  }}
                >
                  <FullWidthImage
                    src={mediaUrl}
                    alt={`${type} image`}
                    height={1400}
                    width={1600}
                  />
                  <Typography
                    component="figcaption"
                    variant="subtitle1"
                    align="center"
                    mt={1}
                  >
                    {mediaCaption}
                  </Typography>
                </Box>
              </Grow>
            </Grid>
          </Grid>
          <Typography mt={2} mb={2} variant="h2" textAlign="center">
            Studios
          </Typography>
          {studios.length > 0 && (
            <ResponsiveGrid>
              {studios.map((studio: MartialArtsStudio) => (
                <MartialArtsStudioGridTile studio={studio} key={studio.name} />
              ))}
            </ResponsiveGrid>
          )}
        </PageContainer>
      </Fade>
    </>
  );
}
