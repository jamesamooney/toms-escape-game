import { PlayButton } from '../level-items/PlayButton'
import themeTune from '../audio/AppThemeTune.wav'
import { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Sound } from 'react';

export const LevelZero = () => {

  useEffect(() => {
    new Audio(themeTune).play();
  },[])

  // const playAudio = () => {
  //   new Audio(themeTune).play();
  // }
  // useEffect(
  //   () => { playAudio() }, []);


  return (
    <div className='level-zero'>

      <PlayButton />
   
      

    </div>
  )
}