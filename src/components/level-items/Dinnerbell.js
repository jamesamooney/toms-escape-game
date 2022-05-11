import dinnerbell from '../../images/items/dinnerbell.png';
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import gulpSFX from "../audio/gulpSFX.wav"
import dinnerBellSFX from "../audio/dinnerBellSFX.wav"
import dogSnarlSFX from "../audio/dogSnarlSFX.wav"

export const Dinnerbell = () => {
  const { logs, setLogs } = useContext(AppContext);
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext);
  const { hasBellRung, setHasBellRung } = useContext(AppContext);

  const playAudioGulpSFX = () => {
    new Audio(gulpSFX).play()
  }
  
  const playAudioDinnerBellSFX = () => {
    new Audio(dinnerBellSFX).play()
  }

  const playAudioDongSnarlSFX = () => {
    new Audio(dogSnarlSFX).play()
  }

  const clickBell = () => {
    if (isTrapLaid) {
      playAudioDinnerBellSFX()
      setTimeout(playAudioDongSnarlSFX, 400)
      setLogs([...logs, { type:"success", text: "Good work, Spike's coming over. Get ready to detonate!"}])
      setHasBellRung(true)
    } else{
      playAudioGulpSFX()
      setLogs([...logs, { type:"inform", text: "That's Spike's dinner bell, you better have some food ready before you ring it..."}])
    }
  }

  return (
    <img id="dinnerbell" className="item" src={dinnerbell} onClick={clickBell}/>
  )
}