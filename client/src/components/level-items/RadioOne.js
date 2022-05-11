import radio from "../../images/items/radio.png";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { RadioOneAudio } from "./RadioOneAudio";

export const RadioOne = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { radioPlaying, setRadioPlaying} = useContext(AppContext)

  const playRadio = () => {
    setLogs([...logs, { type:"inform", text: "The radio starts playing..."}])
    setRadioPlaying(true)
    RadioOneAudio.play()
  }

  const stopRadio = () => {
    setRadioPlaying(false)
    RadioOneAudio.pause()
  }
  return !radioPlaying? (
    <div>
      <img className="item" id="radio-one" src={radio} onClick={playRadio} />
    </div>
  ) : (
    <div>
      <img className="item" id="radio-one" src={radio} onClick={stopRadio} />
    </div>
  )
}