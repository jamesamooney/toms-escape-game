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
      setLogs([...logs, { type:"success", text: "You hit the detonator, go and check if you got him" }])
      setIsKillerDefeated(true)
      setDetonatorAudioPlayed(true)
      DetonateAudio.play()
    } else if (hasBellRung && detonatorAudioPlayed) {
      setLogs([...logs, { type:"inform", text: "You've already detonated, you surely can't be thinking of blowin' up more stuff?!" }])
    } else {
      setLogs([...logs, { type:"inform", text: "Theres no point hitting the detonator now, spikes not in position" }])
    }
  }

  return (
    <img className='item' id="detonator-set" onClick={clickDetonator} src={detonator}/>
  )
}