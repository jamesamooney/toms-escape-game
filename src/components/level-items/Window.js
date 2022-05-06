import window from '../../images/items/window.png';
import arrowDown from '../../images/items/arrowDown.png';
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const Window = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { hasRock, setHasRock } = useContext(AppContext)
  const { isWindowBroken, setIsWindowBroken} = useContext(AppContext)

  const clickWindow = () => {
    hasRock ? setIsWindowBroken(!isWindowBroken) : setLogs([...logs, <p> A nigh indestructible window </p>])
  }
  return ( isWindowBroken ? 
    <div>
       <img id="arrow-outside" className="item" src={arrowDown}  />
    </div>
    : 
    <div>
       <img id="window-border" className="item" src={window} onClick={clickWindow} />
    </div>
  )
}
