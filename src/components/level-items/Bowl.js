import emptyDogBowl from "../../images/items/emptyDogBowl.png"
import bowlWithBone from "../../images/items/bowlWithBone.png"


import { AppContext } from "../../AppContext"
import { useContext } from "react"


export const Bowl = () => {
  const { hasBone, setHasBone } = useContext(AppContext);
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext);
  const { hasTnt, setHasTnt } = useContext(AppContext);
  const { hasDetonator, setHasDetonator } = useContext(AppContext);

  const { logs, setLogs } = useContext(AppContext)

  const clickBowl = () => {
    if (hasBone && hasTnt && hasDetonator) {
      setIsTrapLaid(true)
      setLogs([...logs, { type:"success", text: "The trap is set, but spikes still asleep"}])
    } else {
      setLogs([...logs, { type:"inform", text: "You don't have all the trap materials"}])
    }
  }

  return isTrapLaid ?
  (<img className="item" id="bowl-with-bone" src={bowlWithBone} onClick={clickBowl}/>)
    :
  (<img className="item" id="empty-bowl" src={emptyDogBowl} onClick={clickBowl}/>)
}