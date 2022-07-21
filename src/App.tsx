import { addDays, subDays } from "date-fns";
import { useState } from "react";
import Calendar from "./Components/Calendar";
import PostalCodeField from "./Components/PostalCodeField";
import WeeklyCalendar from "./Components/WeeklyCalendar";

function App() {
  const today = new Date();

  const weeklyCalendarEntries = [
    { title: "Code all night", date: today },
    { title: "Finish the code challenge", date: addDays(today, 2) },
    { title: "Join Ergeon", date: addDays(today, 5) },
    { title: "HR interview", date: subDays(today, 2) },
  ];

  const [state, setState] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date());
  const [zip, setZip] = useState("");
  return (
    <div className="App" style={{ padding: "20px" }}>
      <div style={{ marginBottom: "100px" }}>
        <h4>Weekly Calendar</h4>
        <WeeklyCalendar
          currentWeek={currentWeek}
          onWeekChange={(date) => setCurrentWeek(date)}
          entries={weeklyCalendarEntries}
        />
      </div>
      <div style={{ marginBottom: "100px", width: "300px" }}>
        <h4>USA postal code input</h4>
        <PostalCodeField value={zip} onChange={(e) => setZip(e.target.value)} />
      </div>
      <div style={{ width: "300px" }}>
        <h4>Calendar</h4>
        Selected date {selectedDate?.toDateString()}
        <Calendar
          currentMonth={state}
          selectedDate={selectedDate}
          onDateChange={(date) => setSelectedDate(date)}
          onMonthChange={(newMonth) => setState(newMonth)}
        />
      </div>
    </div>
  );
}

export default App;
