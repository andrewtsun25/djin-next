import { Box, Fade, Grid2, Grow, Typography } from "@mui/material";
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
import { Title } from "../../../src/components/text";
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
  params: Promise<MartialArtsPageParams>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  props: GenerateMetadataProps,
): Promise<Metadata> {
  const params: MartialArtsPageParams = await props.params;
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

export default async function MartialArtsPage(props: {
  params: Promise<MartialArtsPageParams>;
}): Promise<React.JSX.Element> {
  const params: MartialArtsPageParams = await props.params;
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Title variant="h2" sx={{ mb: 2 }}>
              {name}
            </Title>
            <MartialArtsLogoImage
              src={logoUrl}
              alt={`${type}_logo`}
              height={200}
              width={200}
            />
            <Typography sx={{ fontSize: "1.5rem", mt: 2 }}>
              Exp Level: {expLevel}
            </Typography>
          </Box>
          <Grid2 container spacing={2} sx={{ mb: 2, whiteSpace: "pre-line" }}>
            <Grid2 size={{ xs: 12, lg: 6 }}>
              <Typography sx={{ mt: 2, mb: 2, fontStyle: "italic" }}>
                {description}
              </Typography>
              {biography.map((paragraph: string, index: number) => (
                <Typography sx={{ mt: 2, mb: 2 }} key={index}>
                  {paragraph}
                </Typography>
              ))}
            </Grid2>
            <Grid2
              size={{ xs: 12, lg: 6 }}
              sx={{ display: "flex", alignItems: "center" }}
            >
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
                    sx={{ textAlign: "center", mt: 1 }}
                  >
                    {mediaCaption}
                  </Typography>
                </Box>
              </Grow>
            </Grid2>
          </Grid2>
          <Title sx={{ mt: 2, mb: 2 }} variant="h2">
            Studios
          </Title>
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
