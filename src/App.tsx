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
        <WeeklyCalendar
          currentWeek={currentWeek}
          onWeekChange={(date) => setCurrentWeek(date)}
          entries={weeklyCalendarEntries}
        />
      </div>
      <div style={{ marginBottom: "100px" }}>
        <PostalCodeField value={zip} onChange={(e) => setZip(e.target.value)} />
      </div>
      Selected date {selectedDate?.toString()}
      <div style={{ width: "300px" }}>
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
