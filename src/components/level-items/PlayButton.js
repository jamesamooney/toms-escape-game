import React from 'react'
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import play from "../../images/items/play.png"



export const PlayButton = () => {
  const { playerLocation, setPlayerLocation } = useContext(AppContext)


  const goToBasement = () => {
    setPlayerLocation(1)
  }

  return (
    <div>
      <img id="play-button" className="item" src={play} onClick={goToBasement}/>
    </div>
  )
}
