import PowerSwitchOn from "../../images/items/SwitchOn.png"
import PowerSwitchOff from "../../images/items/switchOff.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PowerSwitch = () => {
  const { hasBroom, setHasBroom } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { hasTurnedOnPower, setHasTurnedOnPower } = useContext(AppContext)
  const { hasShovel, setHasShovel } = useContext(AppContext)
  
  const turnPowerOn = () => {
    if (hasBroom) {
      setHasTurnedOnPower(true)
      setLogs([...logs, { type: "success", text: "You reachup with the broom and...ZAP! You got the power!"}])
      
    } else if (!hasBroom && hasShovel) {
      setLogs([...logs, { type: "warning", text: "This shovel isn't quite long enough..."}])
    } else {
      setLogs([...logs, { type: "warning", text: "It's out of reach! You need to get hold of something long and sturdy..."}])
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
