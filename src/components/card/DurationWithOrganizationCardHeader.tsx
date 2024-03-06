import { Avatar, CardHeader } from "@mui/material";
import React from "react";

import { getTimeIntervalAsString } from "../../util/date";
import { CurrentBadge } from "./styled";

interface DurationWithOrganizationCardHeaderProps {
  title: string;
  subtitle: string;
  startDate: Date;
  endDate?: Date | null;
  logoUrl?: string;
}

const CURRENT_BADGE_TEST_ID = "Current Badge";

export const DurationWithOrganizationCardHeader: React.FC<
  DurationWithOrganizationCardHeaderProps
> = ({
  title,
  subtitle,
  startDate,
  endDate,
  logoUrl,
}: DurationWithOrganizationCardHeaderProps) => {
  const subheader = `${getTimeIntervalAsString(startDate, endDate)}: ${subtitle}`;
  const baseAvatar: React.ReactNode = <Avatar alt={title} src={logoUrl} />;
  const avatar: React.ReactNode = endDate ? (
    baseAvatar
  ) : (
    <CurrentBadge
      overlap="circular"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      variant="dot"
      data-testid={CURRENT_BADGE_TEST_ID}
    >
      {baseAvatar}
    </CurrentBadge>
  );
  return <CardHeader title={title} subheader={subheader} avatar={avatar} />;
};

export { CURRENT_BADGE_TEST_ID };
export type { DurationWithOrganizationCardHeaderProps };
