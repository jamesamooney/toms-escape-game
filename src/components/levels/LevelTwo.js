import downArrow from  "../../images/items/arrowDown.png"
import { Light } from "../level-items/Light"
import { LightSwitch1 } from "../level-items/LightSwitch1"
import { LightSwitch2 } from "../level-items/LightSwitch2"
import { LightSwitch3 } from "../level-items/LightSwitch3"
import { useState } from "react"

export const LevelTwo = ({ setPlayerLocation }) => {
  //lights colours are: 0 = Yellow, 1 = Red, 2 = Green
  const [light1, setLight1] = useState(0)
  const [light2, setLight2] = useState(0)
  const [light3, setLight3] = useState(0)

  const goToBasement = () => {
    setPlayerLocation(1)
  }

  


  return (
    <div className="level-two">
      <Light light1={light1} light2={light2} light3={light3} />
      <LightSwitch1 setLight1={setLight1} light1={light1}/>
      <LightSwitch2 setLight2={setLight2} light2={light2}/>
      <LightSwitch3 setLight3={setLight3} light3={light3}/>
      <img className="down-arrow" src={downArrow} onClick={goToBasement}/>
    </div>
  )
}
