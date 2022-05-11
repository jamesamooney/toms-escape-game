import hole from "../../images/items/hole.png"
import mound from "../../images/items/mound.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import diggingSFX from "../audio/diggingSFX.wav"
import dirtSFX from "../audio/dirtSFX.wav"


export const Hole = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { hasShovel, setHasShovel } = useContext(AppContext);
  const { isHoleDug, setIsHoleDug } = useContext(AppContext);

  const playAudioDiggingSFX = () => {
    new Audio(diggingSFX).play()
  }

  const playAudioDirtSFX = () => {
    new Audio(dirtSFX).play()
  }
  
  const digHole = () => {
    if(hasShovel) {
      playAudioDiggingSFX()
      setIsHoleDug(!isHoleDug)
      setLogs([...logs, { type:"success", text: "You dig tirelessly for two whole minutes and find Spike's hidden treasure: a dog bone!"}])
    } else {
      playAudioDirtSFX()
      setLogs([...logs, { type:"warning", text: "You can't dig up that much dirt yourself. You'll need some sort of implement..."}])
    }
  }

  return  isHoleDug ?
  (<img className="item" id="hole-dug"  src={hole}/>)
    :
  (<img className="item" id="hole-undug" src={mound} onClick={digHole} />)
}
