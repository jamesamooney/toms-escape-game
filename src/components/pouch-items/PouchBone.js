import bone from "../../images/items/bone.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import boneSFX from "../audio/boneSFX.wav"

import React from 'react'


export const PouchBone = () => {
  const { logs, setLogs } = useContext(AppContext)
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext)
  
  const playAudioBoneSFX = () => {
    new Audio(boneSFX).play()
  }

  const clickBone = () => {
    playAudioBoneSFX()
    setLogs([...logs, { type:"inform", text: "Killers favourite bone!"}])
  }

  return isTrapLaid ?
    (<></>)
    :
    (<img className="item" id="pouch-bone" onClick={clickBone} src={bone} style={{ height: '20px'}} />)
}