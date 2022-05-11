import armour from "../../images/items/armour.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import daddy from "../audio/hey.mp3"



export const Armour = () => {

  const playAudio = () => {
    new Audio(daddy).play();
  }

  const { logs, setLogs } = useContext(AppContext)

  const armourClicked = () => {
    setLogs([...logs, {type:"warning", text: "Looks like this angry fella won't let you pass"}])
    playAudio()
    
  }
  return (
    <div>
      <img src={armour}
        alt="Suit of armour"
        id="armour"
        data-testid="armour"
        className="item"
        onClick={armourClicked}
      />
    </div>
  )
}