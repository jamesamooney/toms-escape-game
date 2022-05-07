import window from '../../images/items/window.png';
import arrowRight from '../../images/items/arrowRight.png';
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const Window = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { hasRock, setHasRock } = useContext(AppContext)
  const { isWindowBroken, setIsWindowBroken} = useContext(AppContext)

  const clickWindow = () => {
    if(hasRock) { 
      setIsWindowBroken(!isWindowBroken) 
      setLogs([...logs, { type:"success", text: "You lob the hefty rock and smash the window to pieces!"}])
    } else {
      setLogs([...logs, { type:"inform", text: "A nigh indestructible window"}])
      
    }
  }
  return isWindowBroken ? 
    ( <img id="arrow-outside" className="item" src={arrowRight} /> )
   : 
    ( <img id="window-border" className="item" src={window} onClick={clickWindow} /> )
}
