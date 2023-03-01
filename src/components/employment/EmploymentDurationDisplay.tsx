import { isNil } from "lodash";
import { DateTime, Duration } from "luxon";
import React, { useEffect, useMemo, useState } from "react";

import { Employment } from "../../types/api";
import { EmploymentText } from "./styled";

interface EmploymentDurationDisplayProps {
  employments: Employment[];
}

const EmploymentDurationDisplay = ({
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
        }
      )
      .reduce(
        (duration1: Duration, duration2: Duration) => duration1.plus(duration2),
        Duration.fromObject({ minutes: 0 })
      )
      .normalize()
      .shiftTo("years", "months");
    const years: number = totalDuration.get("years");
    const months: number = Math.round(totalDuration.get("months"));
    return `${years} year(s) and ${months} month(s)`;
  }, [employments, currentTime]);

  // render
  return (
    <EmploymentText>Total Duration: {totalTimeOfEmployment}</EmploymentText>
  );
};

export default EmploymentDurationDisplay;
