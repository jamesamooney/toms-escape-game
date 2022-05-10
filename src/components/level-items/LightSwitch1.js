import lightSwitch1 from "../../images/items/lightSwitchLeft.png" 
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import lightSwitchSFX from "../audio/lightSwitch.wav"

export const LightSwitch1 = () => {
  
  const { hasTurnedOnPower, setHasTurnedOnPower } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { light1, setLight1 } = useContext(AppContext)

  const playAudioLightSwitchSFX = () => {
    new Audio(lightSwitchSFX).play();
  }

  const switchLight = () => {
    playAudioLightSwitchSFX()
    if (!hasTurnedOnPower) {
    setLogs([...logs, { type:"inform", text: "There seems to not be any power"}])  
    } else {
      setLight1(light1 + 1)
      if (light1 === 2) { 
        setLight1(0) }
    }
  }
  
  return (
    <img src={lightSwitch1}
      className="item"
      id="light-switch-1"
      onClick={switchLight} />
  )
}
