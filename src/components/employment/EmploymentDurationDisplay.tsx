import React, { useEffect, useMemo, useState } from "react";
import { isNil } from "lodash";
import { DateTime, Duration } from "luxon";
import { Employment } from "../../types/api";
import { EmploymentText } from "./styled";

interface EmploymentDurationDisplayProps {
  employments: Employment[];
}

const EmploymentDurationDisplay = ({
  employments,
}: EmploymentDurationDisplayProps) => {
  const [currentTime, setCurrentTime] = useState<DateTime>();
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
          const endDate = !isNil(employmentEndDate)
            ? DateTime.fromJSDate(employmentEndDate)
            : currentTime;
          const startDate = DateTime.fromJSDate(employmentStartDate);
          return endDate.diff(startDate, ["years", "months", "days"]);
        }
      )
      .reduce((duration1: Duration, duration2: Duration) =>
        duration1.plus(duration2)
      )
      .normalize()
      .shiftTo("years", "months");
    const years = totalDuration.get("years");
    const months = Math.round(totalDuration.get("months"));
    return `${years} year(s) and ${months} month(s)`;
  }, [employments, currentTime]);

  useEffect(() => {
    setCurrentTime(DateTime.now());
  }, []);

  return (
    <EmploymentText>
      Total Length of Employment: {totalTimeOfEmployment}
    </EmploymentText>
  );
};

export default EmploymentDurationDisplay;
