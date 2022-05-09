import { PlayButton } from '../level-items/PlayButton'
import themeTune from '../audio/AppThemeTune.wav'
import { useEffect } from 'react';

export const LevelZero = () => {

  useEffect(() => {
    new Audio(themeTune).play();
  },[])


  return (
    <div className='level-zero'>

      <PlayButton />
  



    </div>
  )
}