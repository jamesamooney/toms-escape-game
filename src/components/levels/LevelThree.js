
import { Bowl } from '../level-items/Bowl'
import { Killer } from '../level-items/Killer'
import { Kennel } from '../level-items/Kennel'
import { Hole } from "../level-items/Hole"
import { Bone } from "../level-items/Bone"
import { ArrowDown } from "../level-items/ArrowDown"
import arrowRight from '../../images/items/arrowRight.png';
import { TomsKey } from "../level-items/TomsKey"
import { Dinnerbell } from "../level-items/Dinnerbell"

import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import { KillerDefeated } from '../level-items/KillerDefeated'

export const LevelThree = () => {
  const { isHoleDug, setIsHoleDug } = useContext(AppContext);
  const { hasBone, setHasBone } = useContext(AppContext);
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext);
  const { isKillerDefeated, setIsKillerDefeated } = useContext(AppContext)
  const { playerLocation, setPlayerLocation } = useContext(AppContext);
  const { savedMinutes, setSavedMinutes } = useContext(AppContext)
  const { savedSeconds, setSavedSeconds } = useContext(AppContext)
  const { finalTime, setFinalTime } = useContext(AppContext)

  const background = isTrapLaid ? ("level-three-trail") : ("level-three")

  const setTime = () => {
    setFinalTime({minutes: savedMinutes, seconds: savedSeconds})
  }

  const gameComplete = () => {
    setPlayerLocation(4)
    setTime()
    console.log('Game complete')
  }

  return (
    <div className ={background}>
      <ArrowDown/>
      <Bowl/>
      <Kennel/>
      {!isKillerDefeated && <Killer/>}
      <Hole/>
      {(isHoleDug && !hasBone) && <Bone/>}
      <img id="arrow-outside" className="item" src={arrowRight} onClick={gameComplete}/>
      <TomsKey/>
      <Dinnerbell/>
      {isKillerDefeated && <KillerDefeated/>}
    </div>
  )
  }