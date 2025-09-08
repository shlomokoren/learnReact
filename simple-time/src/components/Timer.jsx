import { useState , useRef } from "react";
import TimerDisplay from "./timerDisplay";



const Timer = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const toggelTimer = () => {
  if(isRunning){
      //clear interval
      clearInterval(timerRef.current);
      timerRef.current = null;
    }else{
      //start timer
     timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);      
    }
    setIsRunning(!isRunning);
  }
const resetTimer = () => {
  clearInterval(timerRef.current);
  timerRef.current = null;
  setTime(0);
  setIsRunning(false);
}

    return ( <div  > 
    <TimerDisplay time= {time} />
      <button className="mt-3 bg-green-500 text-white 
      px-4 py-2  rounded hover:bg-green-600 mr-3"
      onClick={toggelTimer}>
        {isRunning ? "Pause" : "Start"}
      </button>
     <button className="mt-3 bg-red-500 text-white 
      px-4 py-2  rounded hover:bg-red-600"
      onClick={resetTimer}>
        Reset
      </button>

  </div> );
}
 
export default Timer;