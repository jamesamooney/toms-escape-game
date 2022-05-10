import window from '../../images/items/window.png';
import arrowRight from '../../images/items/arrowRight.png';
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { RadioOneAudio } from "./RadioOneAudio";

export const Window = () => {
  const { logs, setLogs } = useContext(AppContext);
  const { hasRock, setHasRock } = useContext(AppContext);
  const { isWindowBroken, setIsWindowBroken } = useContext(AppContext);
  const { playerLocation, setPlayerLocation } = useContext(AppContext);
  const { radioPlaying, setRadioPlaying} = useContext(AppContext)
  
  const clickWindow = () => {
    if(hasRock) { 
      setIsWindowBroken(!isWindowBroken) 
      setLogs([...logs, { type:"success", text: "You lob your hefty rock and smash the window to pieces!"}])
    } else {
      setLogs([...logs, { type:"inform", text: "A nigh-indestructible window! What a pane..."}])
      
    }
  }
  
  const levelComplete = () => {
    setLogs([...logs, { type:"inform", text: "You carefully tiptoe over the glass and jump out the window"}])
    setPlayerLocation(3)
    setRadioPlaying(false)
    RadioOneAudio.pause()
  }
  
  return isWindowBroken ? 
    ( <img id="arrow-outside" className="item" src={arrowRight} onClick={levelComplete}/> )
   : 
    ( <img id="window-border" className="item" src={window} onClick={clickWindow} /> )
}
