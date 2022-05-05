import lightYellow from "../../images/items/lightYellow.png"
import lightRed from "../../images/items/lightRed.png"
import lightGreen from "../../images/items/lightGreen.png"

export const Light = ({light1, light2, light3}) => {
  
  const checkLight = (lightState) => {
    console.log(lightState)
    if (lightState === 0) {
      return lightYellow
    } else if (lightState === 1) {
      return lightRed
    } else {
      return lightGreen
    }
  }
  
  return (
    <div>
      <img src={checkLight(light1)} className="item" id="light-1"/>
      <img src={checkLight(light2)} className="item" id="light-2"/>
      <img src={checkLight(light3)} className="item" id="light-3"/>
    </div>
  )
}
