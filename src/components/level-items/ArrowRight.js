import React from 'react'
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import arrowRight from '../../images/items/arrowRight.png';
import endTheme from "../audio/TomAndJerryThemeAcapella.wav"




export const ArrowRight = () => {
  const { finalTime, setFinalTime } = useContext(AppContext)
  const { savedMinutes, setSavedMinutes } = useContext(AppContext)
  const { savedSeconds, setSavedSeconds } = useContext(AppContext)
  const { playerLocation, setPlayerLocation } = useContext(AppContext);
  const { tomIsFree, setTomIsFree } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)


  const setTime = () => {
    const formatSeconds = savedSeconds.toString().padStart(2, 0)
    const stringTime = `${savedMinutes}.${formatSeconds}`
    const floatTime = parseFloat(stringTime)
    setFinalTime(floatTime)
  }

  const gameComplete = () => {
    setPlayerLocation(4)
    setTime()
    console.log('Game complete')
  }

  const playAudio = () => {
    new Audio(endTheme).play();
  }

  const arrowClick = () => {
    tomIsFree ? gameComplete() : setLogs([...logs, { type:"warning", text: "You can't just leave Tom behind!"}])
    if (tomIsFree) {
      playAudio()
    }
  }

  return (
    <div>
      <img id="arrow-outside" className="item" src={arrowRight} onClick={arrowClick}/>
    </div>
  )
}
