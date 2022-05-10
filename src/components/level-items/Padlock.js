import padlock from "../../images/items/padlock_with_code2.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import padlockSound from "../audio/padlock.wav"

export const Padlock = ({  setPadlockClicked, isPadlockClicked}) => {

  const { logs, setLogs } = useContext(AppContext)

  const playAudioPadlock = () => {
    new Audio(padlockSound).play();
  }

  const padlockClicked = () => {
    playAudioPadlock();
    setPadlockClicked(!isPadlockClicked)
    setLogs([...logs, { type: "inform", text: "You need to insert the correct combination of numbers to open this padlock"}])

  }

  return (
    <div className='padlock-div'>
      
      <img src={padlock}
        id="padlock"
        className="item"
        onClick={padlockClicked}
      />
      
    </div>
  )
}
