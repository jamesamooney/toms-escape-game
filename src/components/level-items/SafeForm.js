import { useState, useContext } from 'react'
import { AppContext } from "../../AppContext"

export const SafeForm = () => {
  const { isSafeSolved, setSafeSolved } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  
  const password = 'cigar'
  const [passwordGuess, setPasswordGuess] = useState("")
  
  const checkPassword = (e) => {
    if(passwordGuess.toLowerCase() === password) {
      setSafeSolved(true)
      setLogs([...logs, { type:"success", text: "You cracked it open and found a smashing-looking rock inside. A window to success?"}])
    } else {
      setLogs([...logs, { type:"warning", text: "Wrong combination!"}])
    }
    e.preventDefault()
  }

  return (
      <form className="safe-form">
          <input type="text" id="safe-text" value={passwordGuess} onChange={(e) => setPasswordGuess(e.target.value)} />
          <input type="submit" value="Crack it!" onClick={checkPassword} />
      </form>
  )
}
