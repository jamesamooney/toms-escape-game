import padlock from "../../images/items/padlock_with_code2.png"

export const Padlock = ({ logs, setLogs, setPadlockClicked, isPadlockClicked}) => {

  const padlockClicked = () => {
    setPadlockClicked(!isPadlockClicked)
    setLogs([...logs, <p>You need to insert the correct combination of numbers to open this padlock</p>])

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
