import { getDate, isToday } from "date-fns";
import cn from "classnames";
import "./CalendarDay.css";

type Props = {
  date: Date;
  outOfRange?: boolean;
  className?: string;
  selected?: boolean;
  onClick: () => void;
};

const Day = ({ date, className, outOfRange, selected, onClick }: Props) => {
  const classNames = cn(className, "calendar-day", {
    "calendar-day__today": isToday(date),
    "calendar-day__out-of-range": outOfRange,
    "calendar-day__selected": selected,
  });

  return (
    <span className={classNames} onClick={onClick}>
      {getDate(date)}
    </span>
  );
};

export default Day;
