import rock from "../../images/items/rock.png";
import { PouchRock } from "../pouch-items/PouchRock";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import rockSFX from "../audio/rockSFX.wav"

export const Rock = () => {
  const { hasRock, setHasRock } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)

  const playAudioRockSFX = () => {
    new Audio(rockSFX).play()
  }

  const grabRock = () => {
    playAudioRockSFX()
    setHasRock(!hasRock);
    setLogs([...logs, { type:"inform", text: "A rock? Smashing!"}])

    setPouch([...pouch, <PouchRock key="rock"/>])
  }
  return (
    <div>
      <img className="item" id="rock" src={rock} onClick={grabRock} />
    </div>
  )
}
