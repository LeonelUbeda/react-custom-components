import "./CalendarControls.css";
import ArrowButton from "../ArrowButton";

type Props = {
  title: string;
  onNext: () => void;
  onPrev: () => void;
};

const Controls = ({ title, onNext, onPrev }: Props) => {
  return (
    <div className="calendar-controls">
      <ArrowButton onClick={onPrev} direction="left" />

      <span>{title}</span>
      <ArrowButton onClick={onNext} direction="right" />
    </div>
  );
};

export default Controls;
