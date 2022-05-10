import React from 'react'
import photo from "../../images/items/cigarstomandjerry.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import tape from "../../images/items/tape.png"
import tape2 from "../../images/items/tape2.png"

export const CigarPhoto = () => {
  const { logs, setLogs } = useContext(AppContext)

  const PhotoClick = () => {
    setLogs([...logs, { type:"inform", text: "The good old days, Tom really enjoyed smoking those"}])
  }

  return (
    <>
      <img src={photo} className="item" id="cigar-photo" onClick={PhotoClick} />
      <img id="tape" src={tape} />
      <img id="tape2" src={tape2} />
    </>
  )
}
