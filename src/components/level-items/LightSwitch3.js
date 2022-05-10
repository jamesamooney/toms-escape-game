import lightSwitch3 from "../../images/items/lightSwitchRight.png" 
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const LightSwitch3 = () => {
  const { hasTurnedOnPower, setHasTurnedOnPower } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { light3, setLight3 } = useContext(AppContext)

  const switchLight = () => {
    if (!hasTurnedOnPower) {
      setLogs([...logs, { type:"inform", text: "There seems to not be any power"}])
        
    } else {
      setLight3(light3 + 1)
      if (light3 === 2) { setLight3(0) }
    }
  }

  return (
    <img src={lightSwitch3} className="item" id="light-switch-3" data-testid="light-switch-3" onClick={switchLight}/>
  )
}
