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
      setLogs([...logs, { type:"success", text: "You dig tirelessly for two whole minutes and find Spike's hidden treasure: a dog bone!"}])
    } else {
      setLogs([...logs, { type:"warning", text: "You can't dig up that much dirt yourself. You'll need some sort of implement..."}])
    }
  }

  return  isHoleDug ?
  (<img className="item" id="hole-dug"  src={hole}/>)
    :
  (<img className="item" id="hole-undug" src={mound} onClick={digHole} />)
}
