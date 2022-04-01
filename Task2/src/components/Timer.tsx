import './Timer.css';
import { Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [stopped, setStopped] = useState(true);
  const [paused, setPaused] = useState(false);
  const interval = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (stopped || paused) return clearTimerInterval;
    interval.current = setInterval(onSecondPass, 1000);
    return clearTimerInterval;
  }, [stopped, paused]);

  function onSecondPass() {
    setTimer((prevCounter) => prevCounter + 1);
  }

  function clearTimerInterval() {
    clearInterval(interval.current);
  }

  function onStop() {
    setStopped(true);
    setPaused(false);
    setTimer(0);
  }
  function onStart() {
    setStopped(false);
  }

  function onPause() {
    setPaused(true);
  }
  function onResume() {
    setPaused(false);
  }

  return (
    <div className="timer-display">
      <h1 className="timer">Timer: {timer}</h1>
      <div>
        <Button onClick={stopped ? onStart : onStop}>
          {stopped ? 'START' : 'STOP'}
        </Button>
        <Button onClick={paused ? onResume : onPause} disabled={stopped}>
          {paused ? 'RESUME' : 'PAUSE'}
        </Button>
      </div>
    </div>
  );
};
