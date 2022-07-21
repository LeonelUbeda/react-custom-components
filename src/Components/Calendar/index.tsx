import {
  addMonths,
  format,
  isSameDay,
  isSameMonth,
  Locale,
  subMonths,
} from "date-fns";
import en from "date-fns/locale/en-US";
import useCalendarMonthViewDates from "../../hooks/useCalendarMonthViewDates";
import CalendarControls from "./CalendarControls";
import CalendarDay from "./CalendarDay";
import CalendarGrid from "./CalendarGrid";
import CalendarWeekDays from "./CalendarWeekDays";
import "./index.css";

type Props = {
  locale?: Locale;
  selectedDate?: Date;
  currentMonth: Date;
  onDateChange: (date: Date) => void;
  onMonthChange: (date: Date) => void;
};

const Calendar = ({
  currentMonth,
  onMonthChange,
  onDateChange,
  selectedDate,
  locale = en,
}: Props) => {
  const { dates } = useCalendarMonthViewDates(currentMonth);

  return (
    <div className="calendar-container">
      <CalendarControls
        title={format(currentMonth, "MMM yyyy", { locale })}
        onNext={() => onMonthChange(addMonths(currentMonth, 1))}
        onPrev={() => onMonthChange(subMonths(currentMonth, 1))}
      />
      <CalendarWeekDays locale={locale} />
      <CalendarGrid>
        {dates.map((date) => (
          <CalendarDay
            date={date}
            selected={selectedDate && isSameDay(selectedDate, date)}
            key={date.toString()}
            onClick={() => onDateChange(date)}
            outOfRange={!isSameMonth(date, currentMonth)}
          />
        ))}
      </CalendarGrid>
    </div>
  );
};

export default Calendar;
