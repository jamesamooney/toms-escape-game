import blueprint from "../../images/items/blueprint.png"
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const PouchBlueprint = () => {
  const { logs, setLogs } = useContext(AppContext)

  const clickPouchBlueprint = () => {
    setLogs([...logs, { type:"pouch-item", text: "How to put the grumpy dog in his place: Get Dynamite, a Detonator, a Bone.. ring him over and watch him go KABOOM"}])
  }

  return (
    <img className="item" src={blueprint} style={{ height: '30px'}} onClick={clickPouchBlueprint}/>
  )
}
