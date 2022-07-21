import { Locale } from "date-fns";
import "./CalendarWeekDays.css";

type Props = {
  locale: Locale;
};

const CalendarWeekDays = ({ locale }: Props) => {
  const weekDays = [1, 2, 3, 4, 5, 6, 0].map((i) =>
    locale.localize?.day(i, { width: "abbreviated" })
  );
  return (
    <div className="calendar-week-days">
      {weekDays.map((day) => (
        <span key={day}>{day}</span>
      ))}
    </div>
  );
};

export default CalendarWeekDays;
