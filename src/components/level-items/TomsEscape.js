import titleLogo from '../../images/items/TomsEscapeFont.png'
import themeTune from '../audio/AppThemeTune.wav'
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const TomsEscape = () => {

  const { showPlayButton, setShowPlayButton } = useContext(AppContext)

  const showStartButton = () => {
    new Audio(themeTune).play();
    setShowPlayButton(true)
  }
  
  return (
    <img id='title-logo' src={titleLogo} onClick={showStartButton}/>
  )
}
