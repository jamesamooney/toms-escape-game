import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export const MyStopwatch = () => {
  const {
    seconds,
    minutes,
  } = useStopwatch({ autoStart: true });

  return (
    <div>
      <div className='stopwatch'>
        <span>{minutes}</span>:<span>{seconds < 10 && 0}</span><span>{seconds}</span>
      </div>
      <div className='stopwatch-title'>
        Your Time
      </div>
    </div>
  );
}
