import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import { AppContext } from "../AppContext"
import { useContext } from "react"

export const MyStopwatch = () => {

  const { savedMinutes, setSavedMinutes} = useContext(AppContext)
  const { savedSeconds, setSavedSeconds} = useContext(AppContext)
  const {
    seconds,
    minutes
  } = useStopwatch({ autoStart: true });

  const updateTime = () => {
    setSavedSeconds(seconds);
    setSavedMinutes(minutes);
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
