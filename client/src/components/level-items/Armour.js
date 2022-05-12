import armour from "../../images/items/armour.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import grunt1 from "../audio/grunt1.wav"
import grunt2 from "../audio/grunt2.wav"



export const Armour = () => {

  const playGrunt1 = () => {
    new Audio(grunt1).play();
  }

  const playGrunt2 = () => {
    new Audio(grunt2).play()
  }

  const { logs, setLogs } = useContext(AppContext)
  const { armourClicked, setArmourClicked } = useContext(AppContext)

  const clickArmour = () => {
    if (armourClicked===false) {
    setLogs([...logs, {type:"warning", text: "Looks like this angry fella won't let you pass"}])
    playGrunt1()
    setArmourClicked(true) 
  } else {
    setLogs([...logs, {type:"warning", text: "Looks like this angry fella won't let you pass"}])
    playGrunt2()
    setArmourClicked(false) 
  }
}


  return (
    <div>
      <img src={armour}
        alt="Suit of armour"
        id="armour"
        data-testid="armour"
        className="item"
        onClick={clickArmour}
      />
    </div>
  )
}