import cn from "classnames";
import { getDate, isToday } from "date-fns";
import "./WeeklyCalendarDay.css";

type Props = {
  className?: string;
  date: Date;
  onClick?: () => void;
};

const WeeklyCalendarDay = ({ className, date, onClick }: Props) => {
  const classNames = cn(className, "weekly-calendar-day", {
    "weekly-calendar-day__today": isToday(date),
  });
  return (
    <div className="weekly-calendar-day__container">
      <span className={classNames} onClick={onClick}>
        {getDate(date)}
      </span>
    </div>
  );
};

export default WeeklyCalendarDay;
