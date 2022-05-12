import downArrow from "../../images/items/arrowDown.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { RadioOneAudio } from "./RadioOneAudio";

export const ArrowDown = () => {
  
  const { playerLocation, setPlayerLocation } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { radioPlaying, setRadioPlaying} = useContext(AppContext)
  const { hasBellRung, setHasBellRung } = useContext(AppContext);


  const goBackOneLevel = () => {
    setPlayerLocation(playerLocation -1)
    setRadioPlaying(false)
    RadioOneAudio.pause()
    if (playerLocation === 2) {
      setLogs([...logs, { type: "inform", text: "Running back to the basement... did you forget something?" }])
    } else if (playerLocation === 3 && !hasBellRung) {
      setLogs([...logs, { type: "inform", text: "You head back into the kitchen.. wish they had some yummy cheese" }])
    } else {
      setLogs([...logs, { type: "inform", text: "You jump back into the kitchen before he sees you!" }])
    }
  }

  return (
    <div>
      <img id="down-arrow" className="item" src={downArrow} onClick={goBackOneLevel}/>

    </div>
  )
}
