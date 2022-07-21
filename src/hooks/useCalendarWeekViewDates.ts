import { eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";

const useCalendarWeekViewDates = (date: Date) => ({
  dates: eachDayOfInterval({
    start: startOfWeek(date, { weekStartsOn: 1 }),
    end: endOfWeek(date, { weekStartsOn: 1 }),
  }),
});

export default useCalendarWeekViewDates;
