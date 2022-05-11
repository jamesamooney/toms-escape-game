import bone from "../../images/items/bone.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import { PouchBone } from "../pouch-items/PouchBone"
import boneSFX from "../audio/boneSFX.wav"

export const Bone = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { isHoleDug, setIsHoleDug } = useContext(AppContext);
  const { pouch, setPouch } = useContext(AppContext)
  const { hasBone, setHasBone } = useContext(AppContext)

  const playAudioBoneSFX = () => {
    new Audio(boneSFX).play()
  }

  const pickUpBone = () => {
    playAudioBoneSFX()
    setLogs([...logs, { type:"inform", text: "Now that's a tasty-looking bone..."}]);
    setHasBone(true);
    setPouch([...pouch, <PouchBone key={bone} />]);
    
  }

  return (
    <img className="item" id="bone" src={bone} onClick={pickUpBone}/>
  )
}
