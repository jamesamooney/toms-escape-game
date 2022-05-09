import tomCaged from "../../images/items/tom-depressed.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const TomCaged = () => {
  const { logs, setLogs } = useContext(AppContext)

  const clickTomCaged = () => {
    setLogs([...logs, { type:"inform", text: "Tom's pretty fucked mate"}])
  }
  return (
    <img id="tom-caged" onClick={clickTomCaged} src={tomCaged} />
  )
}