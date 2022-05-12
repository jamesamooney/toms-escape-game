import { useContext } from "react"
import { AppContext } from "../../AppContext"
import happyTom from "../../images/items/happytom.png"
import happyTomSFX from "../audio/woohoo.wav"


export const HappyTom = () => {

  const { playerLocation, setPlayerLocation } = useContext(AppContext)

  const tomClick = () => {
    new Audio(happyTomSFX).play()
  }

  if(playerLocation===1) {return (
    <img id="happy-tom-1" className='item' src={happyTom} onClick={tomClick} />
  )} else if(playerLocation===2) {return (
    <img id="happy-tom-2" className='item' src={happyTom} onClick={tomClick}/>
  )} else {return (
    <img id="happy-tom-3" className='item' src={happyTom} onClick={tomClick}/>
  )}
}