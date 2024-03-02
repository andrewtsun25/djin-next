"use client";

import { Typography } from "@mui/material";
import { isNil } from "lodash";
import { DateTime, Duration } from "luxon";
import React, { useEffect, useMemo, useState } from "react";

import { Employment } from "../../types/api";

interface EmploymentDurationDisplayProps {
  employments: Employment[];
}

export const EmploymentDurationDisplay = ({
  employments,
}: EmploymentDurationDisplayProps) => {
  // Setting current time this way prevents hydration issues.
  const [currentTime, setCurrentTime] = useState<DateTime>();
  useEffect(() => {
    setCurrentTime(DateTime.now());
  }, []);
  const totalTimeOfEmployment: string = useMemo(() => {
    if (isNil(currentTime)) {
      return "Calculating...";
    }
    const totalDuration = employments
      .map(
        ({
          startDate: employmentStartDate,
          endDate: employmentEndDate,
        }: Employment) => {
          const endDate: DateTime = !isNil(employmentEndDate)
            ? DateTime.fromJSDate(employmentEndDate)
            : currentTime;
          const startDate: DateTime = DateTime.fromJSDate(employmentStartDate);
          return endDate.diff(startDate, ["years", "months", "days"]);
        },
      )
      .reduce(
        (duration1: Duration, duration2: Duration) => duration1.plus(duration2),
        Duration.fromObject({ minutes: 0 }),
      )
      .normalize()
      .shiftTo("years", "months");
    let years: number = totalDuration.get("years");
    let months: number = Math.round(totalDuration.get("months"));
    // Add excess months into years, make sure months < 12
    if (months >= 12) {
      years += Math.floor(months / 12);
      months = months % 12;
    }
    // Correctly pluralize years
    const yearString =
      years === 1 ? `${years} year` : years > 0 ? `${years} years` : "";
    // Correctly pluralize months, don't show months if 0 months.
    const monthString =
      months === 1 ? `${months} month` : months > 0 ? `${months} months` : "";
    // Correctly pluralize months, don't show months if 0 months and some years.
    return yearString.length > 0 && monthString.length > 0
      ? `${yearString} and ${monthString}`
      : yearString.length > 0 && monthString.length === 0
        ? yearString
        : yearString.length === 0 && monthString.length === 0
          ? "0 months"
          : monthString; // yearString.length === 0 && monthString.length > 0
  }, [employments, currentTime]);

  // render
  return (
    <Typography mt={2} mb={2}>
      Total Duration: {totalTimeOfEmployment}
    </Typography>
  );
};
