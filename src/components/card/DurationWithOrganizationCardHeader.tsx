import { Avatar, CardHeader } from "@mui/material";
import { isNil } from "lodash";
import { DateTime } from "luxon";
import React from "react";

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
  const startDateTime: DateTime = DateTime.fromJSDate(startDate);
  const {
    monthShort: startDateMonth,
    year: startDateYear,
    day: startDateDay,
  } = startDateTime;
  const endDateTime: DateTime | null | undefined = !isNil(endDate)
    ? DateTime.fromJSDate(endDate)
    : endDate;
  const subheader = !isNil(endDateTime)
    ? `${startDateMonth} ${startDateDay}, ${startDateYear} - ${endDateTime.monthShort} ${endDateTime.day}, ${endDateTime.year}: ${subtitle}`
    : `${startDateMonth} ${startDateDay}, ${startDateYear} - Present: ${subtitle}`;
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
