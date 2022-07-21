import {
  addWeeks,
  format,
  getDay,
  isWithinInterval,
  Locale,
  subWeeks,
} from "date-fns";
import en from "date-fns/locale/en-US";
import useCalendarWeekViewDates from "../../hooks/useCalendarWeekViewDates";
import WeeklyCalendarControls from "./WeeklyCalendarControls";
import WeeklyCalendarDay from "./WeeklyCalendarDay";
import WeeklyCalendarGrid from "./WeeklyCalendarGrid";
import WeeklyCalendarWeekDays from "./WeeklyCalendarWeekDays";
import "./index.css";
import WeeklyCalendarBody from "./WeeklyCalendarBody";

type Props = {
  locale?: Locale;
  currentWeek: Date;
  entries?: Array<{ title: string; date: Date }>;
  onWeekChange: (date: Date) => void;
};

const WeeklyCalendar = ({
  locale = en,
  currentWeek,
  onWeekChange,
  entries = [],
}: Props) => {
  const { dates } = useCalendarWeekViewDates(currentWeek);

  const lanesEntries = entries
    .filter((entry) =>
      isWithinInterval(entry.date, {
        start: dates[0],
        end: dates[dates.length - 1],
      })
    )
    .map(({ date, title }) => ({
      title,
      laneNumber: getDay(date),
    }));

  return (
    <div className="weekly-calendar-container">
      <WeeklyCalendarControls
        onNext={() => onWeekChange(addWeeks(currentWeek, 1))}
        onPrev={() => onWeekChange(subWeeks(currentWeek, 1))}
        title={format(currentWeek, "MMM yyyy")}
      />
      <WeeklyCalendarWeekDays locale={locale} />
      <WeeklyCalendarGrid className="weekly-calendar-days-background">
        {dates.map((date) => (
          <WeeklyCalendarDay date={date} />
        ))}
      </WeeklyCalendarGrid>

      {lanesEntries.length > 0 && <WeeklyCalendarBody entries={lanesEntries} />}
    </div>
  );
};

export default WeeklyCalendar;
