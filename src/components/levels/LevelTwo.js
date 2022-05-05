import downArrow from  "../../images/items/arrowDown.png"
import { Light } from "../level-items/Light"
import { LightSwitch1 } from "../level-items/LightSwitch1"
import { LightSwitch2 } from "../level-items/LightSwitch2"
import { LightSwitch3 } from "../level-items/LightSwitch3"
import { Safe } from "../level-items/Safe"
import { CrumpledOnLvl2 } from "../level-items/CrumpledOnLvl2"

import { useState, useEffect } from "react"

export const LevelTwo = ({ setPlayerLocation, logs, setLogs }) => {
  //lights colours are: 0 = Yellow, 1 = Red, 2 = Green
  const [light1, setLight1] = useState(0)
  const [light2, setLight2] = useState(0)
  const [light3, setLight3] = useState(0)

  const [safeAppears, setSafeAppears] = useState(false)
  
  useEffect(() => {
    if (light1 === 0 && light2 === 1 && light3 === 2) {
      setSafeAppears(true)
      console.log("safe open")
      }
    console.log("function running")
    console.log(light1)
  },[light1, light2, light3]) 
  

  const goToBasement = () => {
    setPlayerLocation(1)
    setLogs([...logs, <p>Running back to the basement? Coward...</p>])
  }

  


  return (
    <div className="level-two">
      <Light light1={light1} light2={light2} light3={light3} />
      <LightSwitch1 setLight1={setLight1} light1={light1} />
      <LightSwitch2 setLight2={setLight2} light2={light2} />
      <LightSwitch3 setLight3={setLight3} light3={light3} />
      <CrumpledOnLvl2  />
      {safeAppears && <Safe />}
      <img className="down-arrow" src={downArrow} onClick={goToBasement}/>
    </div>
  )
}
