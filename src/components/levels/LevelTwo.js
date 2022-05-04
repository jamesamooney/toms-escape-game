import downArrow from  "../../images/items/arrowDown.png"
import { Light } from "../level-items/Light"
import { LightSwitch1 } from "../level-items/LightSwitch1"
import { LightSwitch2 } from "../level-items/LightSwitch2"
import { LightSwitch3 } from "../level-items/LightSwitch3"
import { useState } from "react"

export const LevelTwo = ({ setPlayerLocation }) => {

  const [light1, setLight1] = useState("yellow")
  const [light2, setLight2] = useState("yellow")
  const [light3, setLight3] = useState("yellow")

  const goToBasement = () => {
    setPlayerLocation(1)
  }

  return (
    <div className="level-two">
      <Light />
      <LightSwitch1 />
      <LightSwitch2 />
      <LightSwitch3 />
      <img className="down-arrow" src={downArrow} onClick={goToBasement}/>
    </div>
  )
}
