import padlock from "../../images/items/padlock_with_code2.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const Padlock = ({  setPadlockClicked, isPadlockClicked}) => {

  const { logs, setLogs } = useContext(AppContext)

  const padlockClicked = () => {
    setPadlockClicked(!isPadlockClicked)
    setLogs([...logs, { type: "inform", text: "You need to insert the correct combination of numbers to open this padlock..."}])

  }

  return (
    <div className='padlock-div'>
      
      <img src={padlock}
        id="padlock"
        data-testid="padlock"
        className="item"
        onClick={padlockClicked}
      />
      
    </div>
  )
}
