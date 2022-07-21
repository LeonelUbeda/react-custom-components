import {
  addWeeks,
  differenceInCalendarDays,
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
} from "date-fns";
import { getNearestFutureSunday, getNearestPastMonday } from "../utils/dates";

const useCalendarMonthViewDates = (date: Date) => {
  const nearestPastMonday = getNearestPastMonday(startOfMonth(date));
  const nearestFutureSunday = getNearestFutureSunday(endOfMonth(date));

  const totalDays = differenceInCalendarDays(
    nearestFutureSunday,
    nearestPastMonday
  );
  const requireOneExtraWeek = totalDays < 41;

  return {
    dates: eachDayOfInterval({
      start: nearestPastMonday,
      end: requireOneExtraWeek
        ? addWeeks(nearestFutureSunday, 1)
        : nearestFutureSunday,
    }),
  };
};

export default useCalendarMonthViewDates;
