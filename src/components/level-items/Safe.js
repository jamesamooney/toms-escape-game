import closedSafe from "../../images/items/closedSafe.png"
import openSafe from "../../images/items/openSafe.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import accessSafeSFX from "../audio/accessSafe.wav"

export const Safe = () => {
  const { isSafeSolved, setSafeSolved } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { setSafeClicked, isSafeClicked} = useContext(AppContext)

  const playAudioAccessSafeSFX = () => {
    new Audio(accessSafeSFX).play();
  }

  

  const safeClicked = () => {
    playAudioAccessSafeSFX()
    setSafeClicked(!isSafeClicked)
    setLogs([...logs, { type:"inform", text: "Looks like you need to insert a 5 lettered word.."}])
  }

  return isSafeSolved ?
    (
     <img src={openSafe} className="item" id="open-safe"/>
  ) :
    (
      <img src={closedSafe} className="item" id="closed-safe" onClick={safeClicked}/>
  ) 
}
