import brokenGlass from "../../images/items/brokenGlass.png"
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const BrokenGlass = () => {
  const { logs, setLogs } = useContext(AppContext)

  const clickBrokenGlass = () => {
    setLogs([...logs, <p> The remnants of the broken window</p>])
  }
  return (
    <div>
      <img src={brokenGlass} onClick={clickBrokenGlass} />
    </div>
  )
}

