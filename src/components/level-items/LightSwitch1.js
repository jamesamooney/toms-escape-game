import lightSwitch1 from "../../images/items/lightSwitchLeft.png" 
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const LightSwitch1 = () => {
  
  const { hasTurnedOnPower, setHasTurnedOnPower } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { light1, setLight1 } = useContext(AppContext)

  const switchLight = () => {
    
    if (!hasTurnedOnPower) {
    setLogs([...logs, { type:"inform", text: "Looks like the power's off..."}])
      
    } else {
      setLight1(light1 + 1)
      if (light1 === 2) { setLight1(0) }
    }
    
    
  }
  
  return (
    <img src={lightSwitch1}
      className="item"
      id="light-switch-1"
      onClick={switchLight} />
  )
}
