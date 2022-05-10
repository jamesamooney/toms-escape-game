import React from 'react'
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import arrowRight from '../../images/items/arrowRight.png';




export const ArrowRight = () => {
  const { finalTime, setFinalTime } = useContext(AppContext)
  const { savedMinutes, setSavedMinutes } = useContext(AppContext)
  const { savedSeconds, setSavedSeconds } = useContext(AppContext)
  const { playerLocation, setPlayerLocation } = useContext(AppContext);


  const setTime = () => {
    setFinalTime({minutes: savedMinutes, seconds: savedSeconds})
  }

  const gameComplete = () => {
    setPlayerLocation(4)
    setTime()
    console.log('Game complete')
  }

  return (
    <div>
      <img id="arrow-outside" className="item" src={arrowRight} onClick={gameComplete}/>
    </div>
  )
}
