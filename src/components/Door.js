import doorOneClosedImg from "../images/items/closedDoor.png"
import doorOneOpenImg from  "../images/items/openDoor.png"


export const Door = ({ setDoorOneOpen, hasKeyOne, doorOneOpen, setLevelOneComplete }) => {
  
  const openDoor = () => {
    if(hasKeyOne) {
      setDoorOneOpen(true)
      console.log('you opened the door!!')
    }
  
  }

  const levelComplete = () => {
    if(doorOneOpen) {
      setLevelOneComplete(true)
      console.log('Level complete!')
    }
}

return doorOneOpen ? (
    <img src={doorOneOpenImg} className='door' onClick={levelComplete}/>
  ) : ( <img src={doorOneClosedImg} onClick={openDoor} className='door'/> )
}
