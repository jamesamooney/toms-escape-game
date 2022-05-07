import { useState, useContext } from 'react'
import { AppContext } from "../../AppContext"

export const SafeForm = () => {
  const { isSafeSolved, setSafeSolved } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  
  const password = 'cigar'
  const [passwordGuess, setPasswordGuess] = useState("")
  
  const checkPassword = (e) => {
    if(passwordGuess === password) {
      setSafeSolved(true)
      setLogs([...logs, { type:"success", text: "You cracked it open! looks like the all powerful window smashing rock was kept inside!"}])
    } else {
      setLogs([...logs, { type:"warning", text: "Wrong combination"}])
    }
    e.preventDefault()
  }

  return (
    <div className='div-safe'>
      <form className="safe-form">
          <input type="text" value={passwordGuess} onChange={(e) => setPasswordGuess(e.target.value)} />
          <input type="submit" onClick={checkPassword} />
      </form>
    </div>
  )
}
