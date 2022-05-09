import hole from "../../images/items/hole.png"
import mound from "../../images/items/mound.png"

import { AppContext } from "../../AppContext"
import { useContext } from "react"


export const Hole = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { hasShovel, setHasShovel } = useContext(AppContext);
  const { isHoleDug, setIsHoleDug } = useContext(AppContext);
  
  const digHole = () => {
    if(hasShovel) {
      setIsHoleDug(!isHoleDug)
      setLogs([...logs, { type:"success", text: "You dig tirelessly for 2 whole minutes and find Spikes hidden treasure a Dog Bone!"}])
    } else {
      setLogs([...logs, { type:"warning", text: "You can't dig up that much dirt yourself, you need some sort dirt mover or something"}])
    }
  }

  return  isHoleDug ?
  (<img className="item" id="hole-dug"  src={hole}  />)
    :
  (<img className="item" id="hole-undug" src={mound}  onClick={digHole}/>)
}
