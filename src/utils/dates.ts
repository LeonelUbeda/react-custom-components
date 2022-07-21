import { endOfWeek, startOfWeek } from "date-fns";

export const getNearestPastMonday = (date: Date) => {
  return startOfWeek(date, { weekStartsOn: 1 });
};

export const getNearestFutureSunday = (date: Date) => {
  return endOfWeek(date, { weekStartsOn: 1 });
};
