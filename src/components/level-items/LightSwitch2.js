import lightSwitch2 from "../../images/items/lightSwitchRight.png" 
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const LightSwitch2 = ({checkLightPuzzle}) => {
  const { hasTurnedOnPower, setHasTurnedOnPower } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { light2, setLight2 } = useContext(AppContext)

  const switchLight = () => {
    if (!hasTurnedOnPower) {
      setLogs([...logs, { type:"inform", text: "There seems to not be any power"}])
        
    } else {
      setLight2(light2 + 1)
      if (light2 === 2) { setLight2(0) }
      checkLightPuzzle()
    }
  }

  return (
    <img src={lightSwitch2} className="item" id="light-switch-2" onClick={switchLight}/>
  )
}
