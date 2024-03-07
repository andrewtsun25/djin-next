import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Box, SxProps, Theme } from "@mui/material";
import { isEmpty, isNil, map } from "lodash";
import React from "react";

import { StorybookIcon } from "../icons";
import { IconLink } from "../text";

interface ProjectLinksProps {
  projectUrls: Record<string, string> | undefined;
  sx?: SxProps<Theme>;
}
export const ProjectLinks: React.FC<ProjectLinksProps> = ({
  projectUrls,
  sx,
}) => {
  return isNil(projectUrls) || isEmpty(projectUrls) ? null : (
    <Box sx={sx}>
      {map(projectUrls, (url: string, urlName: string) => {
        let icon: React.JSX.Element;
        switch (urlName) {
          case "Source Code":
            icon = <GitHubIcon />;
            break;
          case "Storybook":
            icon = <StorybookIcon />;
            break;
          default:
            icon = <LinkIcon />;
        }
        return <IconLink key={urlName} href={url} text={urlName} icon={icon} />;
      })}
    </Box>
  );
};
