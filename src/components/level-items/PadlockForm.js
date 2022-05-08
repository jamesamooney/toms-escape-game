import { useState } from 'react'
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PadlockForm = ( { setPasswordCorrect, isPadlockClicked, setPadlockClicked, setPadlockSolved }) => {

  const { logs, setLogs } = useContext(AppContext)
  const password = 'spike'
  const [passwordGuess, setPasswordGuess] = useState("")
  const checkPassword = (e) => {
    if(passwordGuess === password) {
      console.log('here');
      setPasswordCorrect(true)
      setPadlockClicked(!isPadlockClicked)
      setPadlockSolved(true)
      setLogs([...logs, <p>Success! the padlock opens and you see a key!</p>])
    } else {
      setLogs([...logs, <p>Nope, padlock won't budge!</p>])
    }
    e.preventDefault()
  }

  return (
    <form className="padlock-form" data-testid="padlock-form">
        <input type="text" value={passwordGuess} onChange={(e) => setPasswordGuess(e.target.value)} />
        <button type="submit" onClick={checkPassword} />
    </form>
  )
}


