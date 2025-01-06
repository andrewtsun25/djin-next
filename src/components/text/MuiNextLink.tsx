import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import React from "react";

export type MuiNextLinkProps = React.ComponentProps<typeof MuiLink> & {
  href: string;
};

export const MuiNextLink: React.FC<MuiNextLinkProps> = (
  props: MuiNextLinkProps,
) => (
  <MuiLink component={NextLink} {...props}>
    {props.children}
  </MuiLink>
);
