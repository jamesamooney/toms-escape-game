
import { EmptyDogBowl } from '../level-items/EmptyDogBowl'
import { Killer } from '../level-items/Killer'
import { Kennel } from '../level-items/Kennel'
import { Hole } from "../level-items/Hole"
import { Bone } from "../level-items/Bone"

import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../AppContext'

export const LevelThree = () => {
  const { isHoleDug, setIsHoleDug } = useContext(AppContext);
  const { hasBone, setHasBone } = useContext(AppContext);
  return (
    <div className ="level-three">
      <EmptyDogBowl/>
      <Kennel/>
      <Killer/>
      <Hole/>
      {(isHoleDug && !hasBone) && <Bone/>}
    </div>
  )
}