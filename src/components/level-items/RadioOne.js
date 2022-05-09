import radio from "../../images/items/radio.png";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import daddy from "../audio/hey.mp3"

export const RadioOne = () => {
  const { logs, setLogs } = useContext(AppContext)

  const playAudio = () => {
    new Audio(daddy).play();
  }

  const clickRadio = () => {
    setLogs([...logs, { type:"inform", text: "The radio starts playing..."}])
    playAudio()
  }
  return (
    <div>
      <img className="item" id="radio-one" src={radio} onClick={clickRadio} />
    </div>
  )
}