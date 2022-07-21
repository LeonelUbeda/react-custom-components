import "./WeeklyCalendarBodyItem.css";

type Props = { title: string };

const WeeklyCalendarBodyItem = ({ title }: Props) => {
  return <div className="weekly-calendar-body-item">{title}</div>;
};

export default WeeklyCalendarBodyItem;
