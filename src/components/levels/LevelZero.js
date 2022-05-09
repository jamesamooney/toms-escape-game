import { PlayButton } from '../level-items/PlayButton'
import { Logo } from '../level-items/Logo'
import { TomsEscape } from '../level-items/TomsEscape';
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { Album } from '../level-items/Album';

export const LevelZero = () => {
  const { showPlayButton, setShowPlayButton } = useContext(AppContext)

  return (
    <div className='level-zero'>
      <Logo />
      <TomsEscape/>
      {showPlayButton && <Album />}


    
      
    </div>
  )
}