import shovel from "../../images/items/shovel.png";
import { PouchShovel } from "../pouch-items/PouchShovel";
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const Shovel = () => {
  const { hasShovel, setHasShovel } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)

  const grabShovel = () => {
    setHasShovel(!hasShovel);
    setLogs([...logs, { type:"inform", text: "Wonder what you could dig up this this..?"}])
    setPouch([...pouch, <PouchShovel key="Shovel"/>])
  }
  return (
    <div>
      <img className="item" id="shovel" src={shovel} onClick={grabShovel} />
    </div>
  )
}