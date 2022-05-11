import lightYellow from "../../images/items/lightYellow.png"
import lightRed from "../../images/items/lightRed.png"
import lightGreen from "../../images/items/lightGreen.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const Light = ({ light1, light2, light3 }) => {
  
  const { logs, setLogs } = useContext(AppContext)

  
  const checkLight = (lightState) => {
    if (lightState === 0) {
      return lightYellow
    } else if (lightState === 1) {
      return lightRed
    } else {
      return lightGreen
    }
  }

  const clickedLight = () => {
    setLogs([...logs, { type:"inform", text: "Looks like these lights could change colour"}])

  }
  
  return (
    <div>
      <img src={checkLight(light1)} className="item" id="light-1" data-testid="light-1" onClick={clickedLight} />
      <img src={checkLight(light2)} className="item" id="light-2" data-testid="light-2" onClick={clickedLight} />
      <img src={checkLight(light3)} className="item" id="light-3" data-testid="light-3" onClick={clickedLight} />
    </div>
  )
}
