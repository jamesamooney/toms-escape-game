import doorOneClosedImg from "../../images/items/closedDoor.png"
import arrowForward from  "../../images/items/arrowForward.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import lockedDoorSound from "../audio/lockedDoor.mp3"
import openDoorSound from "../audio/openDoor.mp3"

export const Door = ({ setDoorOneOpen, hasKeyOne, doorOneOpen }) => {

  const { logs, setLogs } = useContext(AppContext)
  const { playerLocation, setPlayerLocation } = useContext(AppContext)

  const playAudioLockedDoor = () => {
    new Audio(lockedDoorSound).play();
  }

  const playAudioOpenDoor = () => {
    new Audio(openDoorSound).play();
  }
  
  const openDoor = () => {
    if(hasKeyOne) {
      playAudioOpenDoor()
      setDoorOneOpen(true)
      setLogs([...logs, { type:"success", text: "You insert the key, and it magically opens the door!"}])
    } else {
      playAudioLockedDoor()
      setLogs([...logs, { type:"warning", text: "You really expected the door to open? It's LOCKED! Can't blame you for trying though. Have a look around to see if you find a key!"}])
    }
    
  }
  
  const moveToLevel2 = () => {
    if(doorOneOpen) {
      setLogs([...logs, { type:"inform", text: "You tip toe into the kitchen... these rich folk probably got bare munch"}])
      setPlayerLocation(2)
    }
  }

  return doorOneOpen ? (
    <img src={arrowForward} className="item" id='arrow-forward' onClick={moveToLevel2} />)
    : (<img src={doorOneClosedImg} onClick={openDoor} id='door' className="item" />)
}
