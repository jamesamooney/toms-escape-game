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
      setLogs([...logs, { type:"success", text: "You dig tirelessly for 2 whole minutes and find Spikes hidden treasure a Dog Bone!"}])
    } else {
      playAudioDirtSFX()
      setLogs([...logs, { type:"warning", text: "You can't dig up that much dirt yourself, you need some sort dirt mover or something"}])
    }
  }

  return  isHoleDug ?
  (<img className="item" id="hole-dug"  src={hole}/>)
    :
  (<img className="item" id="hole-undug" src={mound} onClick={digHole} />)
}
