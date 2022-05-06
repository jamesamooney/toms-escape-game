import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export const MyStopwatch = ({setSeconds, setMinutes}) => {
  const {
    seconds,
    minutes
  } = useStopwatch({ autoStart: true });

  const updateTime = () => {
    setSeconds(seconds);
    setMinutes(minutes);
  }

  return (
    <div>
      <div className='stopwatch'>
        <span>{minutes}</span>:<span>{seconds < 10 && 0}</span><span>{seconds}</span>
        {updateTime()}
      </div>
      <div className='stopwatch-title'>
        Your Time
      </div>
    </div>
  );
}
