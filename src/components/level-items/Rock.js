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
    setLogs([...logs, <p>Ohh... A special window breaking rock!</p>])
    setPouch([...pouch, <PouchRock />])
  }
  return (
    <div>
      <img className="rock" src={rock} onClick={grabRock} />
    </div>
  )
}
