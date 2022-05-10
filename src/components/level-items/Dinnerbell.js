import dinnerbell from '../../images/items/dinnerbell.png';
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const Dinnerbell = () => {
  const { logs, setLogs } = useContext(AppContext);
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext);
  const { hasBellRung, setHasBellRung } = useContext(AppContext);



  const clickBell = () => {
    if (isTrapLaid) {
      setLogs([...logs, { type:"success", text: "Good work, Spike's coming over. Get ready to detonate!"}])
      setHasBellRung(true)
    } else{
      setLogs([...logs, { type:"inform", text: "That's Spike's dinner bell, you better have some food ready before you ring it..."}])
    }
  }

  return (
    <img id="dinnerbell" className="item" src={dinnerbell} onClick={clickBell}/>
  )
}