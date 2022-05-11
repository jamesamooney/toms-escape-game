import React from 'react'
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import arrowRight from '../../images/items/arrowRight.png';




export const ArrowRight = () => {
  const { finalTime, setFinalTime } = useContext(AppContext)
  const { savedMinutes, setSavedMinutes } = useContext(AppContext)
  const { savedSeconds, setSavedSeconds } = useContext(AppContext)
  const { playerLocation, setPlayerLocation } = useContext(AppContext);
  const { tomIsFree, setTomIsFree } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)


  const setTime = () => {
    setFinalTime({minutes: savedMinutes, seconds: savedSeconds})
  }

  const gameComplete = () => {
    setPlayerLocation(4)
    setTime()
    console.log('Game complete')
  }

  const arrowClick = () => {
    tomIsFree ? gameComplete() : setLogs([...logs, { type:"warning", text: "You can't just leave Tom behind!"}])

  }

  return (
    <div>
      <img id="arrow-outside" className="item" src={arrowRight} onClick={arrowClick}/>
    </div>
  )
}
