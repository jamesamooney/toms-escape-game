import detonator from "../../images/items/detonator.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { DetonateAudio } from "./DenonatorAudio"

export const DetonatorSet = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext);
  const { hasBellRung, setHasBellRung } = useContext(AppContext)
  const { isKillerDefeated, setIsKillerDefeated } = useContext(AppContext)
  const { detonatorAudioPlayed, setDetonatorAudioPlayed } = useContext(AppContext)

  const clickDetonator = () => {
    if (hasBellRung && !detonatorAudioPlayed) {
      setLogs([...logs, { type:"success", text: "You hit the detonator! Go and check if you got him..." }])
      setIsKillerDefeated(true)
      setDetonatorAudioPlayed(true)
      DetonateAudio.play()
    } else if (hasBellRung && detonatorAudioPlayed) {
      setLogs([...logs, { type:"inform", text: "You've already detonated! Surely you're not thinking of blowing up more stuff?!" }])
    } else {
      setLogs([...logs, { type:"inform", text: "No point hitting the detonator now, Spike's not in position..." }])
    }
  }

  return (
    <img className='item' id="detonator-set" onClick={clickDetonator} src={detonator}/>
  )
}