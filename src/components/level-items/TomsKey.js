import tomsKey from '../../images/items/tomsKey.png';
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const TomsKey = () => {
  const { logs, setLogs } = useContext(AppContext);

  const clickKey = () => {
    setLogs([...logs, { type:"inform", text: "That's Toms key, but spike wont let you anywhere near it!"}])
  }

  return (
    <img id="toms-key" className="item" src={tomsKey} onClick={clickKey}/>
  )
}

