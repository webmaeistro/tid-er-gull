import { useState, useEffect, useRef } from "react";

export default function useTimer(settings) {
  const { autoStart } = settings;
  const [counting, setCounting] = useState(false);

  const [seconds, setSeconds] = useState(0);
  function addSecond() {
    setSeconds(prevSeconds => {
      if (prevSeconds === 59) {
        addMinute();
        return 0;
      }
      return prevSeconds + 1;
    });
  }

  const [minutes, setMinutes] = useState(0);
  function addMinute() {
    setMinutes(prevMinutes => {
      if (prevMinutes === 59) {
        addHour();
        return 0;
      }
      return prevMinutes + 1;
    });
  }

  const [hours, setHours] = useState(0);
  function addHour() {
    setHours(prevHours => {
      if (prevHours === 23) {
        addDay();
        return 0;
      }
      return prevHours + 1;
    });
  }

  const [days, setDays] = useState(0);
  function addDay() {
    setDays(prevDays => {
      return prevDays + 1;
    });
  }

  const intervalRef = useRef();
  function startTimer() {
    if (!intervalRef.current) {
      setCounting(true);
      intervalRef.current = setInterval(() => {
        addSecond();
      }, 1000);
    }
  }

  function stopTimer() {
    if (intervalRef.current) {
      setCounting(false);
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }

  function resetTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
      setCounting(false);
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setDays(0);
    }
  }
  // cDM
  useEffect(() => {
    if (autoStart) {
      startTimer();
    }
    // clean up cWU
    return stopTimer;
  }, []);

  return {
    seconds,
    minutes,
    hours,
    days,
    counting,
    startTimer,
    stopTimer,
    resetTimer
  };
}
