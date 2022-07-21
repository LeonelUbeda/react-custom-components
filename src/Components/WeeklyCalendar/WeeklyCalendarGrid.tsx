import cn from "classnames";
import "./WeeklyCalendarGrid.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const WeeklyCalendarGrid = ({ children, className }: Props) => {
  return (
    <div className={cn(className, "weekly-calendar-grid")}>{children}</div>
  );
};

export default WeeklyCalendarGrid;
