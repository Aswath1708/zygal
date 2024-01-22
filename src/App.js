import { useEffect, useState } from "react";
import "./App.css";
import { getDays } from "./utils/getDays";
import { getThirtyDays, getThirtyOneDays } from "./utils/getDates";
import { getMonths } from "./utils/getMonths";
import { getMonthNames } from "./utils/getMonthNames";
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css'

function App() {
  const currentYear = new Date();
  const currMonth = new Date().getMonth();
  const days = getDays();
  const months = getMonths();
  const [month, setMonth] = useState(1);
  const [selectedDates, setSelectedDates] = useState(["22"]);

  const dates = month % 2 == 0 ? getThirtyDays() : getThirtyOneDays();

  useEffect(() => {
    document.querySelectorAll(".date").forEach((date) => {
      if (date.innerText == "22") {
        date.classList.add("selected");
      }
    });
  }, []);

  const handlePrevClick = () => {
    if (month == 1) {
      setMonth(12);
    } else {
      setMonth((month) => month - 1);
    }
  };

  const handleNextClick = () => {
    if (month == 12) {
      setMonth(1);
    } else {
      setMonth((month) => month + 1);
    }
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <div className="currentYearAndMonth">
        <p>{currentYear.getFullYear()}</p>
        <p>{getMonthNames()[month - 1]}</p>
      </div>
      <div className="month">
        <div className="days">
          {days.map((day, i) => {
            return <p key={i}>{day}</p>;
          })}
        </div>
        <div className="dates">
          {dates.map((date, i) => (
            <p
              key={i}
              value={date}
              onClick={(e) => {
                e.target.classList.toggle("selected");
                e.target.classList.contains("selected") &&
                  setSelectedDates([...selectedDates, date]);
              }}
              className="date"
            >
              {date}
            </p>
          ))}
        </div>
      </div>
      <div className="selectedDates">
        <h4>User Selected Dates:</h4>
        {selectedDates.length > 0 &&
          selectedDates.map((date, i) => {
            return (
              <p key={i}>
                {date}-{month}-24
              </p>
            );
          })}
      </div>
      {/* <Calendar/> */}
    </div>
  );
}

export default App;
