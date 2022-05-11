import lightSwitch2 from "../../images/items/lightSwitchRight.png" 
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import lightSwitchSFX from "../audio/lightSwitch.wav"

export const LightSwitch2 = () => {
  const { hasTurnedOnPower, setHasTurnedOnPower } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { light2, setLight2 } = useContext(AppContext)

  const playAudioLightSwitchSFX = () => {
    new Audio(lightSwitchSFX).play();
  }

  const switchLight = () => {
    playAudioLightSwitchSFX()
    if (!hasTurnedOnPower) {
      setLogs([...logs, { type:"inform", text: "Looks like the power's off..."}])
        
    } else {
      setLight2(light2 + 1)
      if (light2 === 2) { setLight2(0) }
    }
  }

  return (
    <img src={lightSwitch2} className="item" id="light-switch-2" data-testid="light-switch-2" onClick={switchLight}/>
  )
}
