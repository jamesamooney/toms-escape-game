import george from "../../images/items/george-sun.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const GeorgeSun = () => {

  const { logs, setLogs } = useContext(AppContext)

  const clickGeorge = () => {
    setLogs([...logs, {type:"inform", text: "George didn't tell me what to write"}])
  }
  return (
    <div>
      <img src={george}
        alt="The sun"
        id="sun"
        className="item"
        onClick={clickGeorge}
      />
    </div>
  )
}