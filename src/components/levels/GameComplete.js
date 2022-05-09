import '../../App.css';
import { AppContext } from "../../AppContext"
import { useContext } from "react"


export const GameComplete = ({ setPlayerLocation }) => {
  const { userName, setUserName } = useContext(AppContext)
  const { finalTime, setFinalTime } = useContext(AppContext)
 
  const sendScore = async (name, time) => {
    
    const url = 'http://localhost:3030/scores'

    const data = {
      name: name,
      minutes: time.minutes,
      seconds: time.seconds
    }

    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
  }


  const submitName = (e) => {
    console.log(userName)
    sendScore(userName, finalTime)
    e.preventDefault()
  }

  return (
    <div className="game-complete">
        <form>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input type="submit" value="Enter Your Name" onClick={submitName} />
      </form>
    </div>
  );
}