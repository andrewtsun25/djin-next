import { isNil } from "lodash";
import { DateTime } from "luxon";

export function getTimeIntervalAsString(
  startDate: Date,
  endDate?: Date | null,
) {
  const startDateTime: DateTime = DateTime.fromJSDate(startDate);
  const {
    monthShort: startDateMonth,
    year: startDateYear,
    day: startDateDay,
  } = startDateTime;
  const endDateTime: DateTime | null | undefined = !isNil(endDate)
    ? DateTime.fromJSDate(endDate)
    : endDate;
  return isNil(endDateTime)
    ? `${startDateMonth} ${startDateDay}, ${startDateYear} - Present`
    : `${startDateMonth} ${startDateDay}, ${startDateYear} - ${endDateTime.monthShort} ${endDateTime.day}, ${endDateTime.year}`;
}
