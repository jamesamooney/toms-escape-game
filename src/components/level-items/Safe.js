import closedSafe from "../../images/items/closedSafe.png"
import openSafe from "../../images/items/openSafe.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"

export const Safe = ({setSafeClicked, isSafeClicked}) => {
  const { isSafeSolved, setSafeSolved } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const safeClicked = () => {
    setSafeClicked(!isSafeClicked)
    setLogs([...logs, { type:"inform", text: "Looks like you need to insert a 5 lettered word.."}])
    console.log("clicking safe")
  }

  return isSafeSolved ?
    (
     <img src={openSafe} className="item" id="safe"/>
  ) :
    (
      <img src={closedSafe} className="item" id="safe" onClick={safeClicked}/>
  ) 
}
