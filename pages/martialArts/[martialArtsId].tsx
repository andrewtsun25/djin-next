import {
  Fade,
  Grid,
  Grow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { isNil } from "lodash";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import React from "react";

import {
  MartialArtsBackground,
  MartialArtsStudioGridTile,
} from "../../src/components/martialArts";
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
} from "../../src/components/martialArts/styled";
import MartialArtsContentContainer from "../../src/components/martialArts/styled/MartialArtsContentContainer";
import MartialArtsImageSection from "../../src/components/martialArts/styled/MartialArtsImageSection";
import { ResponsiveGrid } from "../../src/components/responsiveGrid";
import { getMartialArtsStyle } from "../../src/dal/api";
import { MartialArtsStudio, MartialArtsStyle } from "../../src/types/api";

interface MartialArtsPageProps {
  martialArtsStyle: MartialArtsStyle;
}

interface MartialArtsParams extends ParsedUrlQuery {
  martialArtsId: string;
}

export const getStaticPaths: GetStaticPaths<MartialArtsParams> = async () => {
  return {
    paths: [
      { params: { martialArtsId: "itfTkd" } },
      { params: { martialArtsId: "wtTkd" } },
      { params: { martialArtsId: "hdgd" } },
      { params: { martialArtsId: "muaythai" } },
      { params: { martialArtsId: "bjj" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
};
export const getStaticProps: GetStaticProps<
  MartialArtsPageProps,
  MartialArtsParams
> = async ({ params }) => {
  if (isNil(params)) {
    throw new Error("Martial Arts Page was not supplied with martialArtsId");
  }
  const martialArtsStyle = await getMartialArtsStyle(params.martialArtsId);
  if (isNil(martialArtsStyle)) {
    throw new Error(
      `Martial Arts Style for martialArtsId ${params.martialArtsId} could not be found`,
    );
  }
  return {
    props: {
      martialArtsStyle,
    },
  };
};

type MartialArtsNextPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const renderMartialArtsStudioGridTile = (
  studio: MartialArtsStudio,
  index: number,
): JSX.Element => <MartialArtsStudioGridTile studio={studio} key={index} />;

const MartialArtsPage = ({
  martialArtsStyle: {
    logoUrl,
    type,
    name,
    description,
    biography,
    expLevel,
    mediaUrl,
    mediaCaption,
    studios,
  },
}: MartialArtsNextPageProps) => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Head>
        <title>d.jin - {name}</title>
      </Head>
      <MartialArtsBackground>
        <Fade in>
          <MartialArtsContentContainer maxWidth="lg">
            <MartialArtsPageHeading>
              <MartialArtsPageTitle variant={isLarge ? "h2" : "h4"}>
                {name}
              </MartialArtsPageTitle>
              {isLarge && (
                <MartialArtsLogoImage
                  src={logoUrl}
                  alt={`${type}_logo`}
                  height={200}
                  width={200}
                />
              )}
            </MartialArtsPageHeading>
            <MartialArtsExperienceLevel variant={isLarge ? "h4" : "h5"}>
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
              <ResponsiveGrid
                items={studios}
                renderGridTile={renderMartialArtsStudioGridTile}
              />
            </MartialArtsStudioGridSection>
          </MartialArtsContentContainer>
        </Fade>
      </MartialArtsBackground>
    </>
  );
};

export default MartialArtsPage;
