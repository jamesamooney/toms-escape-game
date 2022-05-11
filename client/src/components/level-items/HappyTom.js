import { useContext } from "react"
import { AppContext } from "../../AppContext"
import happyTom from "../../images/items/happytom.png"

export const HappyTom = () => {

  const { playerLocation, setPlayerLocation } = useContext(AppContext)

  if(playerLocation===1) {return (
    <img id="happy-tom-1" className='item' src={happyTom} />
  )} else if(playerLocation===2) {return (
    <img id="happy-tom-2" className='item' src={happyTom} />
  )} else {return (
    <img id="happy-tom-3" className='item' src={happyTom} />
  )}
}