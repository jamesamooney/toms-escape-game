import downArrow from  "../../images/items/arrowDown.png"
import { Light } from "../level-items/Light"
import { LightSwitch1 } from "../level-items/LightSwitch1"
import { LightSwitch2 } from "../level-items/LightSwitch2"
import { LightSwitch3 } from "../level-items/LightSwitch3"
import { Safe } from "../level-items/Safe"
import { SafeForm } from "../level-items/SafeForm"
import { Paper1 } from "../level-items/Paper1"
import { Paper2 } from "../level-items/Paper2"
import { Paper3 } from "../level-items/Paper3"
import { Broom } from "../level-items/Broom"
import { Rock } from "../level-items/Rock"
import { Window } from "../level-items/Window"
import { BrokenGlass } from "../level-items/BrokenGlass"
// import { BrokenGlass } from "../level-items/BrokenGlass" 
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../AppContext'


export const LevelTwo = ({ setPlayerLocation, logs, setLogs }) => {
  
  //lights colours are: 0 = Yellow, 1 = Red, 2 = Green
  const { light1, setLight1 } = useContext(AppContext)
  const { light2, setLight2 } = useContext(AppContext)
  const { light3, setLight3 } = useContext(AppContext)
  const { hasBroom, setHasBroom } = useContext(AppContext)
  const { isSafeSolved, setSafeSolved } = useContext(AppContext)
  const { safeAppears, setSafeAppears } = useContext(AppContext)
  const { isSafeClicked, setSafeClicked } = useContext(AppContext)
  const { hasPaper1, setHasPaper1 } = useContext(AppContext)
  const { hasPaper2, setHasPaper2 } = useContext(AppContext)
  const { hasPaper3, setHasPaper3 } = useContext(AppContext)
  const { hasRock, setHasRock } = useContext(AppContext)
  const { isWindowBroken, setIsWindowBroken} = useContext(AppContext)
  const { finalTime, setFinalTime } = useContext(AppContext)
  const { minutes, setMinutes } = useContext(AppContext)
  const { seconds, setSeconds } = useContext(AppContext)


  
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

  const setTime = () => {
    setFinalTime({minutes: minutes, seconds: seconds})
    sendScore("James", finalTime)
  }
  
  const sendScore = async (name, time) => {
    const url = 'http://localhost:3030/scores'

    const data = {
      name: name,
      minutes: time.minutes,
      seconds: time.seconds
    }

    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
  }


  return (
    <div className="level-two">
      <Light light1={light1} light2={light2} light3={light3} />
      <LightSwitch1 />
      <LightSwitch2 />
      <LightSwitch3 />
      {!hasPaper1 && <Paper1  />}
      {!hasPaper2 && <Paper2  />}
      {!hasPaper3 && <Paper3  />}
      {!hasBroom &&<Broom /> }
      {safeAppears && <Safe />}
      {isSafeClicked && <SafeForm />}
      {(isSafeSolved && !hasRock)&& <Rock />}
      <div className="item-border" id='window-border'></div>
      {<Window/>}
      {isWindowBroken && <BrokenGlass />}
      <img className="down-arrow" src={downArrow} onClick={goToBasement}/>

      <button onClick={setTime}>Complete Game</button>
    </div>
  )
}
