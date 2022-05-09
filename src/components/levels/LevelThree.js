
import { EmptyDogBowl } from '../level-items/EmptyDogBowl'
import { KillerGuarding } from '../level-items/KillerGuarding'

import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../AppContext'

export const LevelThree = () => {
  return (
    <div className ="level-three">
      <EmptyDogBowl/>
      <KillerGuarding/>
    </div>
  )
}