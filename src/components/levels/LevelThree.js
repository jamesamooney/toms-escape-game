
import { Bowl } from '../level-items/Bowl'
import { Killer } from '../level-items/Killer'
import { Kennel } from '../level-items/Kennel'
import { Hole } from "../level-items/Hole"
import { Bone } from "../level-items/Bone"
import { ArrowDown } from "../level-items/ArrowDown"
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


  const background = isTrapLaid ? ("level-three-trail") : ("level-three")

  return (
    <div className ={background}>
      <ArrowDown/>
      <Bowl/>
      <Kennel/>
      {!isKillerDefeated && <Killer/>}
      <Hole/>
      {(isHoleDug && !hasBone) && <Bone/>}
      <TomsKey/>
      <Dinnerbell/>
      {isKillerDefeated && <KillerDefeated/>}
    </div>
  )
  }