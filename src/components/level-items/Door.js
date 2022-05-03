import doorOneClosedImg from "../../images/items/closedDoor.png"
import doorOneOpenImg from  "../../images/items/openDoor.png"


export const Door = ({ setDoorOneOpen, hasKeyOne, doorOneOpen, setLevelOneComplete, logs, setLogs }) => {
  
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
      setLevelOneComplete(true)
      setLogs([...logs, <p>Room 1 IS COMPLETE</p>])
    }
  }

  return doorOneOpen ? (
    <img src={doorOneOpenImg} className='door' onClick={levelComplete} />)
    : (<img src={doorOneClosedImg} onClick={openDoor} className='door' />)
}
