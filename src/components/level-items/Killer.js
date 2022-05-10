import killerSleeping from "../../images/items/killerSleeping.png";
import killerAwake from "../../images/items/killerAwake.png";
import { AppContext } from "../../AppContext";
import { useContext } from "react";



export const Killer = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { hasBellRung, setHasBellRung } = useContext(AppContext)

  const snore = () => {  
    setLogs([...logs, { type:"inform", text: "Spike's in a deep sleep. How can you distract him?"}])
  }

  const awake = () => {
    setLogs([...logs, { type:"warning", text: "He's awake now and heading your way. Better scram!"}])
  }

  return hasBellRung ? 
  ( <img className="killer-awake" src={killerAwake} onClick={awake}/> )
    :
  ( <img className="killer-sleeping" src={killerSleeping} onClick={snore}/> )

   
}

