import rock from "../../images/items/rock.png";
import { PouchRock } from "../pouch-items/PouchRock";
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const Rock = () => {
  const { hasRock, setHasRock } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)

  const grabRock = () => {
    setHasRock(!hasRock);
    setLogs([...logs, { type:"inform", text: "Ohh... A special window breaking rock!"}])

    setPouch([...pouch, <PouchRock key="rock"/>])
  }
  return (
    <div>
      <img className="rock" src={rock} onClick={grabRock} />
    </div>
  )
}
