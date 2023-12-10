import React, { useEffect, useState } from 'react'


const TimerComponent = () => {
  const [Minutes, setMinutes] = useState(25);
  const [second, setSecond] = useState(0);
  const [isActive, setIsactive] = useState(false)
  const [showBreakTime, setShowBreakTime] = useState(false);

  const [BreakMinutes, setBreakMinutes] = useState(5);
  const [Breaksecond, setBreakSecond] = useState(0);

  // logic for break time

  useEffect(() => {
    let break_timer;

    if (showBreakTime) {
      break_timer = setInterval(() => {
        if (Breaksecond === 0) {
          if (BreakMinutes === 0) {
            clearInterval(break_timer);
            // startBreakTimer();
          } else {
            setBreakMinutes((prev) => prev - 1);
            setBreakSecond(59);
          }

        } else {
          setBreakSecond((prev) => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(break_timer);
  }, [showBreakTime, BreakMinutes, Breaksecond]);

  useEffect(() => {
    if (Minutes == 0 && second == 0) {
      setShowBreakTime(true);
    }
    else {
      return;
    }
  }, [Minutes, second]);

  useEffect(() => {
    if (BreakMinutes == 0 && Breaksecond == 0) {
      setShowBreakTime(false);
      resetTimer();
    }
    else {
      return;
    }
  }, [BreakMinutes, Breaksecond]);

  const displayBreakTimer = () => {

    return (
      <>
        {`Break Time for ${BreakMinutes}mins & ${Breaksecond}sec`}
      </>
    )
  }

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        if (second === 0) {
          if (Minutes === 0) {
            clearInterval(timer);
            // startBreakTimer();
          } else {
            setMinutes((prev) => prev - 1);
            setSecond(59);
          }

        } else {
          setSecond((prev) => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, second, Minutes]);


  const startTimer = () => {
    setIsactive(true);
  };

  const pauseTimer = () => {
    setIsactive(false);
  };

  const resetTimer = () => {
    setIsactive(false);
    setMinutes(25);
    setBreakMinutes(5);
    setSecond(0);
    startTimer();
  };

  useEffect(() => {
    startTimer()
  }, []);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div>
      {
        showBreakTime ?
          <>
            {displayBreakTimer()}
          </>
          :
          <>
            <div id='timer'>
              {formatTime(Minutes)}:{formatTime(second)}
            </div>
            <div id='controls'>
              <button onClick={startTimer}>Start</button>
              <button onClick={pauseTimer}>Pause</button>
              <button onClick={resetTimer}>Reset</button>
            </div>
          </>
      }

    </div>
  )
}

export default TimerComponent;