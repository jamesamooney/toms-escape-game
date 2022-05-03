import doorOneClosedImg from "../images/items/closedDoor.png"
import doorOneOpenImg from  "../images/items/openDoor.png"


export const Door = ({ setDoorOneOpen, hasKeyOne, doorOneOpen }) => {
  
  const openDoor = () => {
    if(hasKeyOne) {
      setDoorOneOpen(true)
      console.log('you opened the door!!')
    }
  }

  return doorOneOpen ? (
    <img src={doorOneOpenImg} className='door'/>
  ) : ( <img src={doorOneClosedImg} onClick={openDoor} className='door'/> )
}
