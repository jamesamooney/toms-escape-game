import brokenGlass from "../../images/items/brokenGlass.png"
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const BrokenGlass = () => {
  const { logs, setLogs } = useContext(AppContext)

  const clickBrokenGlass = () => {
    setLogs([...logs, { type:"inform", text: "The remnants of the broken window"}])

  }
  return (
    <div>
      <img id="broken-glass" className="item"  src={brokenGlass} onClick={clickBrokenGlass} />
    </div>
  )
}

