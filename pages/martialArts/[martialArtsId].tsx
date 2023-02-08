import { useRouter } from "next/router";
import {
  MartialArtsBackground,
  MartialArtsStudioGridTile,
} from "../../src/components/martialArts";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getMartialArtsStyle } from "../../src/dal/api";
import { MartialArtsStudio, MartialArtsStyle } from "../../src/types/api";
import { isArray } from "../../src/util/isArray";
import { isNil } from "lodash";
import {
  Fade,
  Grid,
  Grow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MartialArtsContentContainer from "../../src/components/martialArts/styled/MartialArtsContentContainer";
import {
  MartialArtsBlackBeltRank,
  MartialArtsDescription,
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
import MartialArtsImageSection from "../../src/components/martialArts/styled/MartialArtsImageSection";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { ResponsiveGrid } from "../../src/components/responsiveGrid";

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
      `Martial Arts Style for martialArtsId ${params.martialArtsId} could not be found`
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
  index: number
): JSX.Element => <MartialArtsStudioGridTile studio={studio} key={index} />;

const MartialArtsPage = ({
  martialArtsStyle: {
    logoUrl,
    type,
    name,
    description,
    biography,
    blackBeltRank,
    mediaUrl,
    mediaCaption,
    studios,
  },
}: MartialArtsNextPageProps) => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <MartialArtsBackground>
      <Fade in>
        <MartialArtsContentContainer maxWidth="lg">
          <MartialArtsPageHeading>
            {isLarge && (
              <MartialArtsLogoImage
                src={logoUrl}
                alt={`${type}_logo`}
                height={200}
                width={200}
              />
            )}
            <MartialArtsPageTitle variant={isLarge ? "h1" : "h3"}>
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
          <MartialArtsBlackBeltRank variant={isLarge ? "h4" : "h5"}>
            Current Rank: {blackBeltRank} 단
          </MartialArtsBlackBeltRank>
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
                <MartialArtsFigure>
                  <MartialArtsImage
                    src={mediaUrl}
                    alt={`${type}_img`}
                    height={600}
                    width={800}
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
  );
};

export default MartialArtsPage;
