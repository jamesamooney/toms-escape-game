import { useState } from 'react'
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PadlockForm = ( { setPasswordCorrect, isPadlockClicked, setPadlockClicked, setPadlockSolved }) => {

  const { logs, setLogs } = useContext(AppContext)
  const password = '1940'
  const [passwordGuess, setPasswordGuess] = useState("")
  const checkPassword = (e) => {
    if(passwordGuess === password) {
      console.log('here');
      setPasswordCorrect(true)
      setPadlockClicked(!isPadlockClicked)
      setPadlockSolved(true)
      setLogs([...logs, { type:"success", text: "Success! the padlock opens and you see a key!"}])
    } else {
      setLogs([...logs, { type:"warning", text: "Nope, padlock won't budge!"}])
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


