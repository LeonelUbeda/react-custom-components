import React from "react";
import WeeklyCalendarGrid from "./WeeklyCalendarGrid";
import "./WeeklyCalendarBody.css";
import WeeklyCalendarBodyItem from "./WeeklyCalendarBodyItem";

type Entries = Array<{ title: string; laneNumber: number }>;

type Props = {
  entries: Entries;
};

const WeeklyCalendarBody = ({ entries }: Props) => {
  return (
    <WeeklyCalendarGrid>
      {[1, 2, 3, 4, 5, 6, 0].map((lane) => (
        <div className="weekly-calendar-body__lane">
          {entries
            .filter((e) => e.laneNumber === lane)
            .map(({ title }) => (
              <WeeklyCalendarBodyItem title={title} />
            ))}
        </div>
      ))}
    </WeeklyCalendarGrid>
  );
};

export default WeeklyCalendarBody;
