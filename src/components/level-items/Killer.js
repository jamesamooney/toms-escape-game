import killerSleeping from "../../images/items/killerSleeping.png";
import { AppContext } from "../../AppContext";
import { useContext } from "react";



export const Killer = () => {
  const { logs, setLogs } = useContext(AppContext)

  const snore = () => {  
  
    setLogs([...logs, { type:"inform", text: "He's clearly in a deep sleep, look around for something to distract him"}])
  }

  return (
    <img className="killer-sleeping" src={killerSleeping} onClick={snore}/>
  )
}

