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
      console.log(isWindowBroken)
    } else {
    setLogs([...logs, <p> A nigh indestructible window </p>]) 
    }
  }
  return isWindowBroken ? 
    ( <img id="arrow-outside" className="item" src={arrowRight} /> )
   : 
    ( <img id="window-border" className="item" src={window} onClick={clickWindow} /> )
}
