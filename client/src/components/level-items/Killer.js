import killerSleeping from "../../images/items/killerSleeping.png";
import killerAwake from "../../images/items/killerAwake.png";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import snoringSFX from "../audio/snoringSFX.wav"
import dogSnarlSFX from "../audio/dogSnarlSFX.wav"



export const Killer = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { hasBellRung, setHasBellRung } = useContext(AppContext)

  const playAudioSnoringSFX = () => {
    new Audio(snoringSFX).play()
  }
  
  const playAudioDongSnarlSFX = () => {
    new Audio(dogSnarlSFX).play()
  }

  const snore = () => {  
    playAudioSnoringSFX()
    setLogs([...logs, { type:"inform", text: "He's clearly in a deep sleep, look around for something to distract him"}])
  }

  const awake = () => {
    playAudioDongSnarlSFX()
    setLogs([...logs, { type:"warning", text: "He's awake now and he's coming over, better get outta here!"}])
  }

  return hasBellRung ? 
  ( <img className="killer-awake" src={killerAwake} onClick={awake}/> )
    :
  ( <img className="killer-sleeping" src={killerSleeping} onClick={snore}/> )

   
}

