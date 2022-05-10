import PowerSwitchOn from "../../images/items/SwitchOn.png"
import PowerSwitchOff from "../../images/items/switchOff.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import powerSwitchSFX from "../audio/powerSwitch.wav"
import electricHumSFX from "../audio/electricHum.wav"

export const PowerSwitch = () => {
  const { hasBroom, setHasBroom } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { hasTurnedOnPower, setHasTurnedOnPower } = useContext(AppContext)
  const { hasShovel, setHasShovel } = useContext(AppContext)
  
  const playAudioPowerSwitchSFX= () => {
    new Audio(powerSwitchSFX).play();
  }

  const playAudioElectricHumSFX = () => {
    new Audio(electricHumSFX).play();
  }

  const turnPowerOn = () => {
    if (hasBroom) {
      playAudioPowerSwitchSFX()
      playAudioElectricHumSFX()
      setHasTurnedOnPower(true)
      setLogs([...logs, { type: "success", text: "You reach with the broom and.. ZAP! Power is back on babeeh!"}])
      
    } else if (!hasBroom && hasShovel) {
      playAudioPowerSwitchSFX()
      setLogs([...logs, { type: "warning", text: "This shovel isn't quite long enough..."}])
    } else {
      playAudioPowerSwitchSFX()
      setLogs([...logs, { type: "warning", text: "Its out of reach! Maybe you should look for something long and sturdy"}])
    }
  }

  return hasTurnedOnPower ?
    (<>
    <img className='item' id="power-switch" src={PowerSwitchOn} />
    </>) :
    (<>
    <img className='item' id="power-switch" src={PowerSwitchOff} onClick={turnPowerOn} />
    </>)
}
