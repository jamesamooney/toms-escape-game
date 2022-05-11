import joe from "../../images/items/joe.png";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { HeyJoeAudio } from "./HeyJoeAudio";

export const JoeEasterEgg = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { joePlaying, setJoePlaying } = useContext(AppContext)

  const playSong = () => {
    setLogs([...logs, { type:"inform", text: "You hear a sweet, sweet melody"}])
    setJoePlaying(true)
    HeyJoeAudio.play()
  }

  const stopSong = () => {
    setJoePlaying(false)
    HeyJoeAudio.pause()
  }
  return !joePlaying? (
    <div>
      <img className="hey-joe" src={joe} onClick={playSong} />
    </div>
  ) : (
    <div>
      <img className="hey-joe" src={joe} onClick={stopSong} />
    </div>
  )
}