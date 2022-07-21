import cn from "classnames";
import "./CalendarGrid.css";

type Props = {
  children: React.ReactNode;
};

const Grid = ({ children }: Props) => {
  const classNames = cn("calendar-grid");
  return <div className={classNames}>{children}</div>;
};

export default Grid;
