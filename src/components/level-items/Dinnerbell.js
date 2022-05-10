import dinnerbell from '../../images/items/dinnerbell.png';
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const Dinnerbell = () => {
  const { logs, setLogs } = useContext(AppContext);
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext);
  const { hasBellRung, setHasBellRung } = useContext(AppContext);



  const clickBell = () => {
    if (isTrapLaid) {
      setLogs([...logs, { type:"success", text: "Nice one, spikes coming over. You had better get ready to DETONATE!"}])
      setHasBellRung(true)
    } else{
      setLogs([...logs, { type:"inform", text: "That's spikes dinnerbell, you better make sure you have some food ready before you ring it"}])
    }
  }

  return (
    <img id="dinnerbell" className="item" src={dinnerbell} onClick={clickBell}/>
  )
}