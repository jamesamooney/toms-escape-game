import doorOneClosedImg from "../../images/items/closedDoor.png"
import arrowForward from  "../../images/items/arrowForward.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"

export const Door = ({ setDoorOneOpen, hasKeyOne, doorOneOpen, setPlayerLocation}) => {

  const { logs, setLogs } = useContext(AppContext)
  
  const openDoor = () => {
    if(hasKeyOne) {
      setDoorOneOpen(true)
      setLogs([...logs, <p>You insert the key, and it magically opens the door! You can't hear any voices, maybe you should tiptoe to the next room..</p>])
    } else {
      setLogs([...logs, <p>You really expected the door to open? It's LOCKED! Can't blame you for trying though. Have a look around to see if you find a key!</p>])
    }
    
  }
  
  const levelComplete = () => {
    if(doorOneOpen) {
      setLogs([...logs, <p>You tip toe into the kitchen... these rich folk probably got bare munch</p>])
      setPlayerLocation(2)
    }
  }

  return doorOneOpen ? (
    <img src={arrowForward} className="item" id='arrow-forward' data-testid="arrow-forward" onClick={levelComplete} />)
    : (<img src={doorOneClosedImg} onClick={openDoor} id='door' data-testid="door" className="item" />)
}
