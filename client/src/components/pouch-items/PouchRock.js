import rock from "../../images/items/rock.png";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import rockSFX from "../audio/rockSFX.wav"

export const PouchRock = () => {
  const { logs, setLogs } = useContext(AppContext)

  const playAudioRockSFX = () => {
    new Audio(rockSFX).play()
  }

  const clickPouchRock = () => {
    playAudioRockSFX()
    setLogs([...logs, <p> A window breaking rock... what could I use that for?</p>])
  }
  return (
    <div>
      <img id="pouch-rock" className="item" src={rock} style={{ height: '28px'}} onClick={clickPouchRock}/>
    </div>
  )
}