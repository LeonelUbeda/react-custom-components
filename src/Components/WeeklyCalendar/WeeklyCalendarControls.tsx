import ArrowButton from "../ArrowButton";
import "./WeeklyCalendarControls.css";

type Props = { title: string; onNext: () => void; onPrev: () => void };

const WeeklyCalendarControls = ({ title, onNext, onPrev }: Props) => {
  return (
    <div className="weekly-calendar-controls">
      <span />
      <span className="weekly-calendar-controls__title">{title}</span>
      <div>
        <ArrowButton direction="left" size="lg" onClick={onPrev} />
        <ArrowButton direction="right" size="lg" onClick={onNext} />
      </div>
    </div>
  );
};

export default WeeklyCalendarControls;
