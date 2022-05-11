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
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import { ArrowDown } from "../level-items/ArrowDown"
import { RadioOne } from "../level-items/RadioOne"
import { CigarPhoto } from "../level-items/CigarPhoto"
import { ChestKey } from "../level-items/ChestKey"
import { DetonatorSet } from "../level-items/DetonatorSet"
import { StickyNote } from "../level-items/StickyNote"
import { HappyTom } from "../level-items/HappyTom"


export const LevelTwo = () => {
  
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
  const { logs, setLogs } = useContext(AppContext)
  const { hasChestKey, setHasChestKey } = useContext(AppContext)
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext);
  const { tomIsFree, setTomIsFree } = useContext(AppContext)


  
  useEffect(() => {
    if (light1 === 0 && light2 === 1 && light3 === 2 && !safeAppears) {
      
      setSafeAppears(true)
      setLogs([...logs, { type:"success", text: "A secret compartment slides open and a safe is revealed!"}])

      }
  },[light1, light2, light3]) 
  

  
  const background = isTrapLaid ? ("level-two-trail") : ("level-two")

  return (
    <div className={background}>
      <Light light1={light1} light2={light2} light3={light3} />
      <LightSwitch1 />
      <LightSwitch2 />
      <LightSwitch3 />
      {!hasPaper1 && <Paper1  />}
      {!hasPaper2 && <Paper2  />}
      {!hasPaper3 && <Paper3  />}
      {!hasBroom &&<Broom /> }
      {safeAppears && <Safe />}
      {(isSafeClicked && !isSafeSolved) && <SafeForm />}
      <ArrowDown />
      {(isSafeSolved && !hasRock)&& <Rock />}
      <div className="item-border" id='window-border'></div>
      {<Window />}
      {isWindowBroken && <BrokenGlass />}
      <RadioOne />
      <CigarPhoto />
      <StickyNote />
      {!hasChestKey && <ChestKey />}
      {isTrapLaid && <DetonatorSet />}
      {tomIsFree && <HappyTom />}

    </div>
  )
}
