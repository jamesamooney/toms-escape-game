import bone from "../../images/items/bone.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import { PouchBone } from "../pouch-items/PouchBone"

export const Bone = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { isHoleDug, setIsHoleDug } = useContext(AppContext);
  const { pouch, setPouch } = useContext(AppContext)
  const { hasBone, setHasBone } = useContext(AppContext)


  const pickUpBone = () => {
    setLogs([...logs, { type:"inform", text: "Wow, that bone looks irresistable"}]);
    setHasBone(true);
    setPouch([...pouch, <PouchBone key={bone} />]);
    
  }

  return (
    <img className="item" id="bone" src={bone} onClick={pickUpBone}/>
  )
}
