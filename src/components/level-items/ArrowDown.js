import downArrow from "../../images/items/arrowDown.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { RadioOneAudio } from "./RadioOneAudio";

export const ArrowDown = () => {
  
  const { playerLocation, setPlayerLocation } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { radioPlaying, setRadioPlaying} = useContext(AppContext)


  const goToBasement = () => {
    setPlayerLocation(playerLocation -1)
    setLogs([...logs, { type:"inform", text: "Running back to the basement... did you forget something?"}])
    setRadioPlaying(false)
    RadioOneAudio.pause()
  }

  return (
    <div>
      <img id="down-arrow" className="item" src={downArrow} onClick={goToBasement}/>

    </div>
  )
}
