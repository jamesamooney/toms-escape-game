import broom from "../../images/items/broom.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { PouchBroom } from "../pouch-items/PouchBroom"
import broomSFX from "../audio/broomSFX.wav"

export const Broom = () => {
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { hasBroom, setHasBroom} = useContext(AppContext)

  const playAudioBroomSFX = () => {
    new Audio(broomSFX).play()
  }

  const grabBroom = () => {
    playAudioBroomSFX()
    setHasBroom(true)
    setPouch([...pouch, <PouchBroom key="broom"/>])
    setLogs([...logs, { type:"inform", text: "This broom is very long and hard... I betcha could reach anything with this!"}])

  }

  return (
    <div>
      <img src={broom}
      id="broom" 
      className="item"
      onClick={grabBroom}
      />
    </div>
  )
}