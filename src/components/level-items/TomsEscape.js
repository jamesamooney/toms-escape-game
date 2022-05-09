import titleLogo from '../../images/items/TomsEscapeFont.png'
// import themeTune from '../audio/AppThemeTune.wav'
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import play from "../../images/items/play.png"
import { ThemeTune } from './ThemeTune'

export const TomsEscape = () => {

  const { showPlayButton, setShowPlayButton } = useContext(AppContext)
  const { playerLocation, setPlayerLocation } = useContext(AppContext)

  
  const showStartButton = () => {
    ThemeTune.play()
    setShowPlayButton(true)
  }

  const goToBasement = () => {
    ThemeTune.pause()
    setPlayerLocation(1)
  }
  
  return !showPlayButton? (
    <img id='title-logo' src={titleLogo} onClick={showStartButton}/>
  ) : (
    <div>
      <img id="play-button" className="item" src={play} onClick={goToBasement}/>
    </div>
  )
}
