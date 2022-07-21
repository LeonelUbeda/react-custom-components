import { Locale } from "date-fns";
import "./WeeklyCalendarWeekDays.css";

type Props = {
  locale: Locale;
};

const WeeklyCalendarWeekDays = ({ locale }: Props) => {
  const weekDays = [1, 2, 3, 4, 5, 6, 0].map((i) => locale.localize?.day(i));
  return (
    <div className="weekly-calendar-week-days">
      {weekDays.map((day) => (
        <span key={day}>{day}</span>
      ))}
    </div>
  );
};

export default WeeklyCalendarWeekDays;
