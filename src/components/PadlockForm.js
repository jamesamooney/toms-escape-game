import { useState } from 'react'

export const PadlockForm = ( { setPasswordCorrect }) => {
  const password = 'spike'
  const [passwordGuess, setPasswordGuess] = useState("")
  const checkPassword = (e) => {
    if(passwordGuess === password) {
      e.preventDefault()
      setPasswordCorrect(true)
    }
  }

  return (
    <form>
        <input type="text" value={passwordGuess} onChange={(e) => setPasswordGuess(e.target.value)} />
        <input type="submit" onClick={checkPassword} />
    </form>
  )
}


