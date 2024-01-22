import { useState } from "react";
import "./App.css";
import { getDays } from "./utils/getDays";
import { getThirtyDays, getThirtyOneDays } from "./utils/getDates";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

function App() {

  // const days=getDays();
  // const [month,setMonth] = useState(1);
  // const [selectedDates,setSelectedDates] = useState([]);

  // const dates=month%2==0?getThirtyDays():getThirtyOneDays();

  return <div className="App">

  {/* <div className="buttons">
    <button onClick={()=>setMonth(month=>month-1)}>Prev</button>
    <button onClick={()=>setMonth(month=>month+1)}>Next</button>
  </div>

  <div className="month">
    <div className="days">
      {days.map((day,i)=>{
        return <p key={i}>{day}</p>
      })}
    </div>
    <div className="dates">
      {dates.map((date,i)=> <p key={i}>{date}</p> )}
    </div>
  </div> */}
<Calendar/>
  </div>;
}

export default App;
