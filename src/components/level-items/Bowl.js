import emptyDogBowl from "../../images/items/emptyDogBowl.png"
import bowlWithBone from "../../images/items/bowlWithBone.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import boneSFX from "../audio/boneSFX.wav"



export const Bowl = () => {
  const { hasBone, setHasBone } = useContext(AppContext);
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext);
  const { hasTnt, setHasTnt } = useContext(AppContext);
  const { hasDetonator, setHasDetonator } = useContext(AppContext);
  const { logs, setLogs } = useContext(AppContext)
  const { detonatorAudioPlayed, setDetonatorAudioPlayed } = useContext(AppContext)

  const clickBowl = () => {
    if (hasBone && hasTnt && hasDetonator && !detonatorAudioPlayed) {
      new Audio(boneSFX).play()
      setIsTrapLaid(true)
      setLogs([...logs, { type:"success", text: "The trap is set, but Spike's still asleep..."}])
    } else if (detonatorAudioPlayed) {
      setLogs([...logs, { type:"inform", text: "Worked like a charm!"}])
    } else {
      setLogs([...logs, { type:"inform", text: "You don't yet have all of the trap materials"}])
    }
  }

  return isTrapLaid ?
  (<img className="item" id="bowl-with-bone" src={bowlWithBone} onClick={clickBowl}/>)
    :
  (<img className="item" id="empty-bowl" src={emptyDogBowl} onClick={clickBowl}/>)
}