import { PlayButton } from '../level-items/PlayButton'
import { Logo } from '../level-items/Logo'
import { TomsEscape } from '../level-items/TomsEscape';
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { Album } from '../level-items/Album';
import { OrLinkTo } from '../level-items/OrLinkTo';

export const LevelZero = () => {
  const { showPlayButton, setShowPlayButton } = useContext(AppContext)

  return (
    <div className='level-zero'>
      <Logo />
      <TomsEscape/>
      {showPlayButton && <OrLinkTo />}
      {showPlayButton && <Album />}


    
      
    </div>
  )
}