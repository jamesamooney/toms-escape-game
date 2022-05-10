import blueprint from "../../images/items/blueprint.png"
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const PouchBlueprint = () => {
  const { logs, setLogs } = useContext(AppContext)

  const clickPouchBlueprint = () => {
    setLogs([...logs, { type:"pouch-item", text: "it specifies a trap for Killer the dog, you need Dynamite, a Detonator, a Bone and some way of atracting Killer to his bowl"}])
  }

  return (
    <img className="item" src={blueprint} style={{ height: '30px'}} onClick={clickPouchBlueprint}/>
  )
}
