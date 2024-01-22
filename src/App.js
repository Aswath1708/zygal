import { useState } from "react";
import "./App.css";
import { getDays } from "./utils/getDays";
import { getThirtyDays, getThirtyOneDays } from "./utils/getDates";
import { getMonths } from "./utils/getMonths";
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css'

function App() {

  const days=getDays();
  const months=getMonths();
  const [month,setMonth] = useState(1);
  const [selectedDates,setSelectedDates] = useState([]);

  const dates=month%2==0?getThirtyDays():getThirtyOneDays();

  const handlePrevClick=()=>{
      if(month==1){
        setMonth(12);
      }else{
        setMonth(month=>month-1);
      }
  }

  const handleNextClick=()=>{
    if(month==12){
      setMonth(1);
    }else{
      setMonth(month=>month+1)
    }
  }

  return <div className="App">

  <div className="buttons">
    <button onClick={handlePrevClick}>Prev</button>
    <button onClick={handleNextClick}>Next</button>
  </div>

  <div className="month">
    <div className="days">
      {days.map((day,i)=>{
        return <p key={i} >{day}</p>
      })}
    </div>
    <div className="dates">
      {dates.map((date,i)=> <p key={i} onClick={(e)=>setSelectedDates([...selectedDates,date])}>{date}</p> )}
    </div>
  </div>
  <div className="selectedDates">
    <h4>User Selected Dates:</h4>
      {selectedDates.length>0&&selectedDates.map((date,i)=>{
        return <p key={i}>{date}-{month}-24</p>
      })}
  </div>
{/* <Calendar/> */}
  </div>;
}

export default App;
