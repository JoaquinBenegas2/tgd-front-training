import { useEffect, useState } from "react";
import { formatTime } from "./utils/formatTime";

function App() {
  // State to keep track of the time in seconds
  const [time, setTime] = useState(0);

  // State to check if the timer is running or paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer: number;

    if (isTimerRunning) {
      // ---------------------------------------------------------------------------------->
      // 1. TODO: Set up an interval that updates the time every second
      //    HINT: use the setInterval function from the window object
      timer = window.setInterval(() =>{
        setTime(time + 1)
      },1000)
      
      // <----------------------------------------------------------------------------------
    }

    return () => {
      // ---------------------------------------------------------------------------------->
      // 2. TODO: Clear the interval when the component unmounts or isTimerRunning changes
      //    HINT: use the clearInterval function from the window object, this function takes the timer as an argument
      window.clearInterval(timer)
      // Algorithm:
      // <----------------------------------------------------------------------------------
    };
  }, [isTimerRunning, time]);

  const resetTime = () => {
    // ---------------------------------------------------------------------------------->
    // 3. TODO: Reset the timer by setting the time to 0 and setting isTimerRunning to false
    setIsTimerRunning(false);
    setTime(0);

    // <----------------------------------------------------------------------------------
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <h2>{formatTime(time)}</h2>
      <div className="button-container">
      <button 
          onClick={() => {
            // ---------------------------------------------------------------------------------->
            // 4. TODO: Start the timer by setting isTimerRunning to true
            setIsTimerRunning(true)
            // <----------------------------------------------------------------------------------
          }} 
          className="play-btn">
          ▶
        </button>

        <button 
          onClick={() => {
            // ---------------------------------------------------------------------------------->
            // 5. TODO: Pause the timer by setting isTimerRunning to false
            setIsTimerRunning(false)

            // <----------------------------------------------------------------------------------
          }} 
          className="pause-btn">
          ■
        </button>

        <button onClick={resetTime} className="reset-btn">
          «
        </button>
      </div>
    </div>
  );
}

export default App;
