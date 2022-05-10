import rock from "../../images/items/rock.png";
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const PouchRock = () => {
  const { logs, setLogs } = useContext(AppContext)

  const clickPouchRock = () => {
    setLogs([...logs, <p> A window breaking rock... what could I use that for?</p>])
  }
  return (
    <div>
      <img id="pouch-rock" className="item" src={rock} style={{ height: '30px'}} onClick={clickPouchRock}/>
    </div>
  )
}