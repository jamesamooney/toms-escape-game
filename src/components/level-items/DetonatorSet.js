import detonator from "../../images/items/detonator.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const DetonatorSet = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext);
  const { hasBellRung, setHasBellRung } = useContext(AppContext)
  const { isKillerDefeated, setIsKillerDefeated } = useContext(AppContext)

  const clickDetonator = () => {
    if (hasBellRung) {
      setLogs([...logs, { type:"success", text: "You hit the detonator, go and check if you got him" }])
      setIsKillerDefeated(true)
    } else {
      setLogs([...logs, { type:"inform", text: "Theres no point hitting the detonator now, spikes not in position" }])
    }
  }

  return (
    <img className='item' id="detonator-set" onClick={clickDetonator} src={detonator}/>
  )
}