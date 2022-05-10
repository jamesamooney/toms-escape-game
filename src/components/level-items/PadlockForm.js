import { useState } from 'react'
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import ping from "../audio/ping.mp3"
import padlockSound from "../audio/padlock.wav"

export const PadlockForm = ( { setPasswordCorrect, isPadlockClicked, setPadlockClicked, setPadlockSolved }) => {

  const { logs, setLogs } = useContext(AppContext)
  const password = '1940'
  const [passwordGuess, setPasswordGuess] = useState("")
  const checkPassword = (e) => {

    const playAudioPing = () => {
      new Audio(ping).play();
    }

    const playAudioPadlock = () => {
      new Audio(padlockSound).play();
    }

    if(passwordGuess === password) {
      playAudioPing()
      setPasswordCorrect(true)
      setPadlockClicked(!isPadlockClicked)
      setPadlockSolved(true)
      setLogs([...logs, { type:"success", text: "Success! the padlock opens and you see a key!"}])
    } else {
      playAudioPadlock()
      setLogs([...logs, { type:"warning", text: "Nope, padlock won't budge!"}])
    }
    e.preventDefault()
  }

  return (
    <form className="padlock-form">
        <input id="padlock-text" type="text" value={passwordGuess} onChange={(e) => setPasswordGuess(e.target.value)} />
        <input type="submit" onClick={checkPassword} />
    </form>
  )
}


