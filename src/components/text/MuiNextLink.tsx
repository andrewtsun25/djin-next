import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

/*
 * This file uses https://reacthustle.com/blog/extend-next-13-link-with-mui-link-with-typescript to determine how to
 * compose Next 13's Link with Material UI's Link component
 */

/**
 * We define the component AdaptedNextLinkPropsForMui that uses the _href prop to avoid naming collisions.
 * This is an internal component for this file and is not to be used anywhere else.
 */
type AdaptedNextLinkPropsForMuiProps = Omit<NextLinkProps, "href"> & {
  _href: NextLinkProps["href"];
};

export const AdaptedNextLinkForMui: React.FC<
  AdaptedNextLinkPropsForMuiProps
> = ({ _href, ...props }: AdaptedNextLinkPropsForMuiProps) => {
  return <NextLink href={_href} {...props} />;
};

/**
 * We take a roundabout way to remove the href props and define a new href prop that uses the one
 * NextLinkProps for our custom MuiLink component.
 */

// combine MUI LinkProps with NextLinkProps
type LinkPropsForMuiAndNext = MuiLinkProps<typeof NextLink>;

// remove both href properties
// and define a new href property using NextLinkProps
export type MuiNextLinkProps = Omit<LinkPropsForMuiAndNext, "href"> & {
  href: NextLinkProps["href"];
};

export const MuiNextLink: React.FC<MuiNextLinkProps> = ({
  href,
  ...props
}: MuiNextLinkProps) => {
  // use _href props of CustomNextLink to set the href
  return <MuiLink {...props} component={AdaptedNextLinkForMui} _href={href} />;
};
