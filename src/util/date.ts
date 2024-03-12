import { isNil } from "lodash";
import { DateTime } from "luxon";

/**
 * Represents a time interval in string format
 * @param startDate - The start date
 * @param endDate - The end date. If omitted, will represent this value as 'Present'
 */
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
