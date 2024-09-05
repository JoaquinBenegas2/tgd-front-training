# Exercise Resolution

```jsx
import { useEffect, useState } from "react";
import { formatTime } from "./utils/formatTime";

function App() {
  const [time, setTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer: number;

    if (isTimerRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isTimerRunning]);

  const resetTime = () => {
    setTime(0);
    setIsTimerRunning(false);
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <h2>{formatTime(time)}</h2>
      <div className="button-container">
        <button onClick={() => setIsTimerRunning(true)} className="play-btn">
          ▶
        </button>
        <button onClick={() => setIsTimerRunning(false)} className="pause-btn">
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
```
